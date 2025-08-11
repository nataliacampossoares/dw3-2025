import express from 'express'
import { getContatos, getContatoById } from '../controller/contatoController.js'

const router = express.Router()

// Definir as rotas

router.get('/', getContatos)
router.get('/:id', getContatoById)

// router.post('/', (req, res) => {
//     res.send("contatos")
// })

// router.update('/', (req, res) => {
//     res.send("contatos")
// })

// router.delete('/', (req, res) => {
//     res.send("contatos")
// })


export default router