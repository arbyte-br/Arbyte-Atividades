const rs = require('readline-sync')
const axios = require('axios')
const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
function GetBreakingBadQuote(){
    const api = axios.get(url)
    .then(({data}) =>{
        const {quote, author} = data[0]
        console.log(`${quote} autor: ${author}`)
    })
    .catch(error =>{
        console.log(error)
    })
}
GetBreakingBadQuote()