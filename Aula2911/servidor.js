const port = 5050;

const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

const cors = require("cors");
app.use(cors());

// Otimizando a gravação com uso de um vetor
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

app.post('/salvar', (req, res) => {
    let nomeNoForm = req.body.nome
    // Salvando um nome (sobrescrevendo o arquivo)
    //fs.writeFileSync('nome.txt', nomeNoForm)
    // Salvando vários nomes
    //fs.appendFileSync('nomes.txt', `\n${nomeNoForm}`)
    let cadastro = {nome: nomeNoForm}
    console.log(cadastro);
    console.log('\n'+JSON.stringify(cadastro)+',');
    //fs.appendFileSync('nomes.json', `\n${JSON.stringify(cadastro)}`)
    
    // Adiciona o nome no vetor e salva o vetor no arquivo
    vetorNomes.push(cadastro)
    fs.writeFileSync('nomes.json', JSON.stringify(vetorNomes))

    const result = `Olá, ${nomeNoForm}`
    res.render('index', { result })
})

app.get("/nomes", (req, res) => {
    const result = null
  res.render("nomes", { result });
});

app.listen(port, () => console.log("Servidor funcionando na porta: ", port));
