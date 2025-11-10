// server.js
const express = require("express");
const app = express();
const professoresRoutes = require("./routes/professores");

app.use(express.json());
app.use("/professores", professoresRoutes);

// Porta padrão
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
