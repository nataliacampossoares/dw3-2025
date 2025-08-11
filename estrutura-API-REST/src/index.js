// const express = require('express')
import express from 'express'

const server = express()
const port = 3000


server.get('/', (req, res) => {
    res.send("API")
})


server.listen(port, () => {
    console.log(`Servidor na porta ${port}`)
})
