const port = 4040;

const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/informacoes", (req, res) => {
  res.render("partials/informacoes");
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.post("/salvar", (req, res) => {
  let nomeNoForm = req.body.nome;
  let sobrenomeNoForm = req.body.sobrenome;
  let telefoneNoForm = req.body.telefone;
  let cadastro = {
    nome: nomeNoForm,
    sobrenome: sobrenomeNoForm,
    telefone: telefoneNoForm,
  };
  console.log(cadastro);
  console.log("\n" + JSON.stringify(cadastro) + ",");
  fs.appendFileSync("nomes.json", `\n${JSON.stringify(cadastro)}`);
  resultado = `Olá, ${nomeNoForm}`;
  res.render("salvar", { resultado });
});

app.listen(port, () => console.log("Servidor funcionando na porta: ", port));
