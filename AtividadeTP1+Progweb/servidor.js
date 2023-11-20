const port = 8080;

const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.listen(8080, ()=> console.log
('server funcionando na porta: ', port))

const cors = require('cors')
app.use(cors())

app.get ('/', (req, res) => {
    res.render('index')
})
