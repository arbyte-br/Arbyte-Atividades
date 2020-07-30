const axios = require('axios')
const urlApi = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'

axios.get(urlApi)
    .then(res => {
        console.log(`Frase: ${res.data[0].quote}`);
        console.log(`Autor: ${res.data[0].author}`);
    })
    .catch(err => {
        console.log(err);
    })