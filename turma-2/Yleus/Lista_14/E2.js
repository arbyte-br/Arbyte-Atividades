const rs = require('readline-sync')
const axios = require('axios')

let urlApi = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'


function fraseAleatoria() {

    axios.get(urlApi)
        .then(res => {
            let data = res.data
            let { quote, author } = data[0]
            console.log(`Frase: ${quote} Autor: ${author}`)
        })

        .catch(err => {
            console.log(err)
        })
}


fraseAleatoria()
