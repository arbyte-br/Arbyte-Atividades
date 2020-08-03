// (OBRIGATORIO)Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e
// também seu autor
// Utilize a API : https://breaking-bad-quotes.herokuapp.com/v1/quotes

const rs = require('readline-sync')
const axios = require('axios')
const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
function GetBreakingBadQuote() {
    const api = axios.get(url)
        .then(res => {
            console.log(`${res.data[0].quote}, autor: ${res.data[0].author}`)
        })
        .catch(error => {
            console.log(error)
        })
}
GetBreakingBadQuote()