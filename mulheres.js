const express = require ("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Jubisclausa',
        biografia: 'Uma mulher de poucas palavras que diz muito'
    },
    {
        nome: 'Cleusa Moraes',
        biografia: 'Uma mulher jovem com meia idade já'
    },
    {
        nome: 'Jureuma',
        biografia: 'Uma mulher hipócrita que diz ser antiracista'
    }
]

function mostraMulheres(resquesti,response) {
    response.json(mulheres)
}
function mostraPorta() {
    console.log("servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)