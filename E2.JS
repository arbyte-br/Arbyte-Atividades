// (OBRIGATORIO)Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e
// também seu autor
// Utilize a API : https://breaking-bad-quotes.herokuapp.com/v1/quotes
const axios = require('axios')

const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'

axios.get(url)
    .then((res) => {
        return console.log(res.data)
    })

try {


} catch (error) {

}