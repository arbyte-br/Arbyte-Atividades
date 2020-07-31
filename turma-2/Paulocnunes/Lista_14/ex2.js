const axios = require('axios')

function imprimirFrase () {

    console.log('Imprimindo frase da série Breaking Bad...')

    axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(res => {
        console.log('Frase: ' + res.data[0].quote)
        console.log('Autor: ' + res.data[0].author)
    })
    .catch(err => {
        console.log('ERRO!')
    })
}

imprimirFrase()