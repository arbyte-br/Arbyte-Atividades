const rs = require('readline-sync')
const axios = require('axios')
const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'

const fraseUser = rs.question('Digite uma frase: ')

function GetBreakingBadQuote() {
    const api = axios.get(url)

        .then(({ data }) => {
            const { quote, author } = data[0]
            console.log(`Frase: ${quote} autor: ${author}`)
            console.log(fraseUser)


        })


        .catch(error => {
            console.log(error)
        })
}

GetBreakingBadQuote()