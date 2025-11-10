// routes/professores.js
const express = require("express");
const router = express.Router();
let professores = require("../data/professores");

// 1️⃣ Listar todos os professores
router.get("/", (req, res) => {
  res.json(professores);
});

// 2️⃣ Buscar professor por ID
router.get("/:id", (req, res) => {
  const professor = professores.find(p => p.id === req.params.id);
  if (!professor) return res.status(404).json({ mensagem: "Id não existente" });
  res.json(professor);
});

// 3️⃣ Listar todas as turmas de um professor
router.get("/:id/turmas", (req, res) => {
  const professor = professores.find(p => p.id === req.params.id);
  if (!professor) return res.status(404).json({ mensagem: "Id não existente" });
  res.json(professor.turmas);
});

// PUT /professores/:id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, idade, departamento } = req.body;

  // Busca o professor pelo id
  const professor = professores.find(p => p.id === id);

  // Verifica se o professor existe
  if (!professor) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }

  // Atualiza os campos (se forem informados)
  if (nome) professor.nome = nome;
  if (idade) professor.idade = idade;
  if (departamento) professor.departamento = departamento;

  res.json({ mensagem: "Professor atualizado com sucesso", professor });
});


// POST /professores/:id/turmas
router.post("/:id/turmas", (req, res) => {
  const { codigo, disciplina, alunos } = req.body;
  const professor = professores.find(p => p.id === req.params.id);
  if (!professor) return res.status(404).json({ mensagem: "Id não existente" });

  const novaTurma = { codigo, disciplina, alunos };
  professor.turmas.push(novaTurma);

  res.status(201).json({ mensagem: "Turma adicionada com sucesso!", novaTurma });
});

// 6️⃣ Listar professores por departamento
router.get("/departamento/:departamento", (req, res) => {
  const depto = req.params.departamento.toLowerCase();
  const filtrados = professores.filter(p => p.departamento.toLowerCase() === depto);
  res.json(filtrados);
});

// 7️⃣ Remover um professor
router.delete("/:id", (req, res) => {
  const index = professores.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ mensagem: "Id não existente" });

  professores.splice(index, 1);
  res.json({ mensagem: "Professor removido com sucesso!" });
});

module.exports = router;
