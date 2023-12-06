const port = 4040;

const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

const cors = require("cors");
app.use(cors());

let vetorNomes = []
if (fs.existsSync('nomes.json')) {
    const dados = fs.readFileSync('nomes.json', 'utf-8')
    console.log(dados);
    vetorNomes = JSON.parse(dados)
}


app.get("/", (req, res) => {
    const result = null
  res.render("index", { result });
});

app.get('/cadastro', (req, res) => {
    let nomeNoForm = req.body.nome
    let cadastro = {nome: nomeNoForm}
    console.log(cadastro);
    console.log('\n'+JSON.stringify(cadastro)+',');
    vetorNomes.push(cadastro)
    fs.writeFileSync('nomes.json', JSON.stringify(vetorNomes))

    const result = `Olá, ${nomeNoForm}`
    res.render('cadastro',)
})

app.get("/nomes", (req, res) => {
    const result = null
  res.render("nomes", { result });
});

app.listen(port, () => console.log("Servidor funcionando na porta: ", port));