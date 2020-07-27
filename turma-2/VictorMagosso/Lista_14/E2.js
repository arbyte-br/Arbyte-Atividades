const axios = require('axios')

function fraseRandom (){
    axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(frase => console.log(frase.data[0]))
}
fraseRandom()
