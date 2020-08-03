// (OBRIGATORIO)Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e
// também seu autor
// Utilize a API : https://breaking-bad-quotes.herokuapp.com/v1/quotes

const axios = require('axios')

function getAPI() {
    axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        .then(res => {
            const dados = res.data[0]
            const { quote, author } = dados

            console.log(`Frase diária de Breaking Bad: ${quote} \n Autor: ${author}.`)
        })
        .catch(err => {
            console.log(err)
        })
}

getAPI()
