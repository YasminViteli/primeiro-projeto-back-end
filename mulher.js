const express = require ("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Yasmin Viteli',
        imagem: 'https://mail.google.com/mail/u/0?ui=2&ik=202d4a24da&attid=0.1&permmsgid=msg-f:1767782461141941567&th=18886cc84487fd3f&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-ipuXtm4EEN0RM19lzHBemvqL-Q1aO9NHgRe8Wtstl4_iO-kjHPZLiuaoySMyzeBbLcPyz0Ddt8Dc5IrOVYZQ5dtlivoojSprGyFhB_YvF5xEKx7ab1_-Bg2M&disp=emb&realattid=18886cc36ae8209720d1',
        minibio: 'sou muito bonita e quem discordar é idiota :>'
})
}

function mostraPorta() {
    console.log("servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher',mostraMulher))
app.listen(porta, mostraPorta)