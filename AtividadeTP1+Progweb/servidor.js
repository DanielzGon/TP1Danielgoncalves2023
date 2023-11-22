const port = 4040;

const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))

const cors = require('cors')
app.use(cors())

app.get ('/', (req, res) => {
    res.render('index')
})

app.get ('/informacoes', (req, res) => {
    res.render('partials/informacoes')
})

app.get ('/cadastro', (req, res) => {
    res.render('cadastro')
})

app.listen(port, ()=> console.log ('Servidor funcionando na porta: ', port))