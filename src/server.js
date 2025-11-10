const express = require('express')
const app = express()

app.use(express.json())

app.listen(3000, () => console.log('Servidor iniciado em httpe://localhost3000/.'))