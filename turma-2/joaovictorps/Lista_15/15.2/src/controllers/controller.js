const mongoose = require('mongoose')

let database
let productSchema

const connectDatabase = async() => {
    database = database || await mongoose.connect('mongodb://127.0.0.1:27017/testeEx', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return database
}

const createProductSchema = async(database) => {
    if(productSchema) {
        return
    }
    productSchema = new database.Schema({
        nome: String,
        preco: Number,
        estoque: Number,
        codigoDeBarras: String
    }, {
        timestamps: true
    })

    database.model('Product', productSchema)
}

// CRUD

// Create
const createProduct = async (body) => {
    let database = await connectDatabase()
    await createProductSchema(database)
    const {Product} = database.models

    const product = new Product({...body})

    product.save()

    return product
}

// Read
const readProducts = async() => {
    let database = await connectDatabase()
    await createProductSchema(database)
    const {Product} = database.models

    const products = Product.find()

    return products
}

// Update
const updateProduct= async({id}, {nome, preco, estoque, codigoDeBarras}) => {
    let database = await connectDatabase()
    await createProductSchema(database)
    const {Product} = database.models

    return Product.updateOne({_id: id}, {nome, preco, estoque, codigoDeBarras}) 
}

// Delete
const deleteProduct= async({id}) => {
    let database = await connectDatabase()
    await createProductSchema(database)
    const {Product} = database.models

    return Product.deleteOne({_id: id})
}

// ReadAz
const readProductsAz = async({letra}) => {
    let database = await connectDatabase()
    await createProductSchema(database)
    const {Product} = database.models

    let regex = new RegExp(`^${letra}`, `i`)

    let response = await Product.find({nome: regex})

    return response
}

module.exports = {
    createProduct,
    readProducts,
    updateProduct,
    deleteProduct,
    readProductsAz
}