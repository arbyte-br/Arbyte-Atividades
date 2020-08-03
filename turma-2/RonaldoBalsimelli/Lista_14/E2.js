/*(OBRIGATORIO) Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e
também seu autor
Utilize a API : https://breaking-bad-quotes.herokuapp.com/v1/quotes
*/

const axios = require('axios')
const rs = require('readline-sync')
const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'

axios.get(url)
    .then(res => {
        console.log("Frase: ",res.data[0].quote)
        console.log("Autor: ",res.data[0].author)
    }) 