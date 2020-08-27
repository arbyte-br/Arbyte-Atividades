// )​Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e 
// também seu autor 
// Utilize a API : ​https://breaking-bad-quotes.herokuapp.com/v1/quotes 

const axios = require('axios')
let url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes '

axios.get(url)
.then (res => {
    console.log(res.data[0].quote)
    console.log(res.data[0].author)
})
.catch(err => {
    console.log(err)
})