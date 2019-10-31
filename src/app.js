const express = require("express")
const app = express()

// //CRIAÇÃO DE ROTAS PADRÃO E OUTRAS NECESSÁRIAS
const index = require("./routes/index")
const movies = require("./routes/filmesRoute")

app.use(express.json());

app.use("*", function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use("/", index)
app.use("/filmes", movies)

module.exports = app //SE QUISER USAR EM OUTRO LUGAR É SÓ CHAMAR O MÓDULO
