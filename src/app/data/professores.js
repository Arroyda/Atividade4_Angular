// data/professores.js

let professores = [
    {
      id: "1",
      nome: "Prof. Carlos",
      idade: 40,
      departamento: "Matemática",
      turmas: [
        { codigo: "9A", disciplina: "MAT101", alunos: ["João", "Maria", "Pedro"] },
        { codigo: "10A", disciplina: "MAT201", alunos: ["Ana", "Luiz"] }
      ]
    },
    {
      id: "2",
      nome: "Prof. Ana",
      idade: 35,
      departamento: "História",
      turmas: [
        { codigo: "9A", disciplina: "HIS101", alunos: ["João", "Pedro"] },
        { codigo: "10B", disciplina: "HIS201", alunos: ["Maria", "Carlos", "Luiza"] }
      ]
    },
    {
      id: "3",
      nome: "Prof. João",
      idade: 50,
      departamento: "Ciências",
      turmas: [
        { codigo: "9A", disciplina: "CIE101", alunos: ["João", "Maria"] },
        { codigo: "9B", disciplina: "CIE101", alunos: ["Pedro", "Luiz"] }
      ]
    }
  ];
  
  module.exports = professores;
  