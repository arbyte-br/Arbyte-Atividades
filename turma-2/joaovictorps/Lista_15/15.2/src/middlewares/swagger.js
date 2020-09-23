const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('../swagger.json')
const path = '/swagger'

const swaggerConfig = [
    path,
    swaggerUi.serve,
    swaggerUi.setup(swaggerDoc)
]

module.exports = {
    swaggerConfig
}