// Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e
// também seu autor
// Utilize a API : https://breaking-bad-quotes.herokuapp.com/v1/quotes

const rs = require('readline-sync')
const axios = require('axios')
const urlApi = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'

function fraseBB() {
    axios.get(urlApi)
        .then(res => {
            let fraseBB = res.data[0].quote
            let fraseAuthor = res.data[0].author 
            console.log(fraseBB)
            console.log(fraseAuthor)
            // console.log(res)
           
                      
        })
        .catch(err => {
            console.log(err)
        })
        
}

fraseBB()