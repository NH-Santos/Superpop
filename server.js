import express from "express";
import pkg from "pg";

const { Pool } = pkg;
const app = express();

app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "meubanco",
  password: "senha",
  port: 5432
});

app.post("/enviar", async (req, res) => {
  const { colaborador, reconhecido } = req.body;

  await pool.query(
    "INSERT INTO reconhecimentos (colaborador, reconhecido_por) VALUES ($1, $2)",
    [colaborador, reconhecido]
  );

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
