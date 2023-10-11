const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.render("index.ejs")
})

app.get('/calcular', (req, res) => {
    let n1 = parseFloat(req.query.txtValor1)
    let n2 = parseFloat(req.query.txtValor2)
    console.log("n1=" + req.query.txtValor1)
    console.log("n2=" + req.query.txtValor2)
    result = n1 + n2
    if (isNaN(result)) {
        result = "Valores inválidos."
    } else {
        result = `${n1} + ${n2} = ${result}`
    }
    
    res.render("index.ejs",{ saida: result })
    document.getElementById("result").innerHTML = "Resultado: "+ result;
})

app.listen(8080)