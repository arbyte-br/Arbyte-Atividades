const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/dbexercicios', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', function() {
    console.log("Erro")
})

db.once('open', function() {
    console.log('Tudo certo!')
})

const restaurantSchema = new mongoose.Schema( {
    address: {
        building: Number,
        coord: [Number, Number],
        street: String,
        zipcode: Number
    },
    borough: String,
    cuisine: String,
    grades:[{
        date: {
            date: Number
        },
        grade: String,
        score: Number
    }],
    name: String,
    restaurant_id: Number
})

restaurantSchema.statics.findByName = function (name){
    return this.find({name: name})
}

restaurantSchema.methods.greetClient = function() {
    console.log('Bem vindo ao ' + this.name + '. Posso Ajudar ?')
}

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

/* const restaurantGreeting = new Restaurant({name: 'Ambassador Diner'})

restaurantGreeting.greetClient() */

/* Restaurant.find({
    borough: 'Bronx'
})
    .then(res => {
        console.log(res)
    })
    .catch( err => {
        console.log(err)
    }) */

/* Restaurant.findByName('Ambassador Diner')
    .then(res => {
        console.log(res)
    }) */

// 1 - Exibindo todos os documentos.
// Restaurant.find().then(res => {console.log(res)}).catch( err => { console.log(err)})

// 2 - Exibindo os campos restaurant_id, nome, bairro e culinária.
// Restaurant.find({}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1})
//.then(res => {console.log(res)}).catch(err => { console.log(err)})

// 3 - Exibindo os campos restaurant_id, nome, bairro e culinária, mas sem o campo _id.
// Restaurant.find({}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0})
//    .then(res => {console.log(res)}).catch(err => {console.log(err)})

// 4 - Exibindo restaurantes localizados no bairro Bronx
// Restaurant.find({borough: 'Bronx'}).then(res => {console.log(res)}).catch(err => {console.log(err)})

// 5 - Exibir os 5 primeiros restaurantes do Bronx
// Restaurant.find({borough: 'Bronx'}).limit(5)
//     .then(res => {console.log(res)}).catch(err => {console.log(err)})

// 6 - Exibir os 5 restaurantes do Bronx, após pular os 5 primeiro do Bronx
// Restaurant.find({"borough": 'Bronx'}).skip(5).limit(5)
// .then(res => {console.log(res)}).catch(err => {console.log(err)})

// 7 - Exibir os restaurantes que atingiram uma pontuação superior a 90
// Restaurant.find({grades:{$elemMatch: {"score": {$gt: 90}}}}// )
// .then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })

// 8 - Exibir os restaurantes com pontuação maior que 80 e menor que 100
// Restaurant.find({grades:{$elemMatch: {"score": {$gt: 80, // $lt: 100}}}})
//     .then(res => {
//         console.log(res)
//     }).catch(err => {
//         console.log(err)
//     })

// 9 - Escreva uma consulta do MongoDB para localizar o ID do restaurante, o nome, 
// o bairro e a culinária dos restaurantes que contêm 'Wil' como as três primeiras letras do nome.
// Restaurant.find({name: /^Wil/ }, {"restaurant_id": 1, // "name": 1, "cuisine": 1})
//     .then(res => {
//         console.log(res)
//     }).catch(err => {
//         console.log(err)
//     })

// 10 - Escreva uma consulta do MongoDB para localizar o ID do restaurante, onome, o bairro e a culinária dos 
// restaurantes que contêm 'Wil' como as três primeiras letras do nome.
// Restaurant.find({"borough": 'Bronx', $or:[{"cuisine": // 'American '}, {'cuisine': 'Chinese'}]})
//     .then(res=> {
//         console.log(res)
//     }).catch(err => {
//         console.log(err)
//     })

// 11 - Escreva uma consulta do MongoDB para localizar o ID do restaurante, o nome, o bairro e a 
//cozinha dos restaurantes que pertencem ao bairro Staten Island ou Queens ou Bronxor Brooklyn.
// Restaurant.find({ borough: {$in: ['Staten Island', // 'Queens', 'Bronx', 'Brooklyn'
// ]} 
// }, {"restaurant_id": 1, "name": 1, 'borough': 1, // "cuisine": 1})
//     .then(res => {
//         console.log(res)
//     }).catch(err => console.log(err))

// 12 - Escreva uma consulta do MongoDB para localizar o ID do restaurante, o nome, o bairro e a culinária 
// dos restaurantes que não pertencem aos bairros Staten Island, Queens, Bronx ou Brooklyn.
// Restaurant.find({ borough: {$nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'
// ]} 
// }, {"restaurant_id": 1, "name": 1, 'borough': 1, "cuisine": 1})
//     .then(res => {
//         console.log(res)
//     }).catch(err => console.log(err))

// 13 - Escreva uma consulta do MongoDB para organizar o nome dos restaurantes em ordem decrescente,
// exibindo esse dado juntamente com todas as colunas.
// Restaurant.find().sort({"name": -1})
//     .then(res => {
//         console.log(res)
//     }).catch(err => {
//         console.log(err)
//     })

// 14 - Escreva uma consulta do MongoDB para saber se todos os endereços contêm a rua ou não.
// Restaurant.find({"address.street": {$exists: true}})
//     .then(res => {
//         console.log(res)
//     }).catch(err => {
//         console.log(err)
//     })