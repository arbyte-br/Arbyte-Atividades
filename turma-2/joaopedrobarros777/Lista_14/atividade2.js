const rs = require("readline-sync")

const axios = require("axios")

const url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes"

function frase() {
    axios.get(url)
    .then(res => {
        let frase = res.data[0].quote
        let autor = res.data[0].author
        console.log(frase)
        console.log(autor)
    })
    .catch(error => {
        console.log(error)
    })
}

frase()