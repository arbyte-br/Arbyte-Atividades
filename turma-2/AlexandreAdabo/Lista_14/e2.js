const rs = require('readline-sync')
const axios = require('axios')
const url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes"

axios.get(url)
    .then(res => {
        console.log('A frase é: ' + res.data[0].quote)
        console.log('O autor é: ' + sres.data[0].author)
    })
    .catch(err => {
        console.log(err)
    })
