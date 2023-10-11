const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.render("index.ejs")
})

app.post('/calcular', (req, res) => {
    let n1 = parseFloat(req.body.txtValor1)
    let n2 = parseFloat(req.body.txtValor2)
    console.log(req.body.operacoes);
    let result
if (req.body.operacoes == "-"){
    result = `${n1} - ${n2} = ${n1-n2}`
}
else if (req.body.operacoes == "+"){
     result = `${n1} + ${n2} = ${n1+n2}`
}
else if (req.body.operacoes == "*"){
     rresult = `${n1} * ${n2} = ${n1*n2}`
}
else if (req.body.operacoes == "/"){
    result = `${n1} / ${n2} = ${n1/n2}`
}
 else {
    result = "Valores inválidos."
    return
 }   

    
    

    res.render("index2.ejs",{ saida: result })
})

app.listen(8080)