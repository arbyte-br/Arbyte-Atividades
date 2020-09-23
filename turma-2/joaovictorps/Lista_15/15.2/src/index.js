const express = require('express')
const routes = require('./routes')
const {swaggerConfig} = require('./middlewares/swagger')

const port = 3000

const app = express()

app.use(express.json())
app.use(routes)
app.use(...swaggerConfig)

app.get('/', (req, res) => {
    res.send('Conectado')
})

app.listen(port, () => {
    console.log(`Conectado na porta ${port}`)
    console.log(`http://localhost:${port}`)
} )