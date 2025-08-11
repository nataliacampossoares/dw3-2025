import express from 'express'

const router = express.Router()

// Definir as rotas

router.get('/contatos', (req, res) => {
    res.send("contatos")
})


export default router