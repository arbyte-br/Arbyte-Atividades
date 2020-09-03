const express = require('express')
const routes = express.Router()
const controller = require('./controllers/controller')

// Create
routes.post('/products/create', (req,res) => controller.createProduct(req.body)
    .then(result => res.send(result))
    .catch(err => console.error(err))
)

// Read
routes.get('/products', (req,res) => controller.readProducts()
    .then(result => res.send(result))
    .catch(err => console.error(err))
)

// Update
routes.put('/products/update/:id', (req, res) => controller.updateProduct(req.params, req.body)
    .then(result => res.send(result))
    .catch(err => console.error(err))
)

// Delete
routes.delete('/products/delete/:id', (req,res) => controller.deleteProduct(req.params)
    .then(result => res.send(result))
    .catch(err => console.error(err))
)

// A a Z
routes.get('/products/:letra?', (req,res) => controller.readProductsAz(req.params)
    .then(result => res.send(result))
    .catch(err => console.error(err))
)

module.exports = routes