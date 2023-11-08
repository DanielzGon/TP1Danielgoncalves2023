const express = require('express')
const app = express()
app.set("view engine", "ejs")

const porta = 8000

app.get("/", (requisicao, resposta) => {
    resposta.render('index')

})

app.get("/obj", (requisicao, resposta) => {
    resposta.render('objetivos')

}) 

console.log("servidor funcionando na porta: " + porta)

app.listen(8000)