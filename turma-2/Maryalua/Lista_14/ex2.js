/*2. (OBRIGATORIO)​Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e
também seu autor Utilize a API : ​https://breaking-bad-quotes.herokuapp.com/v1/quotes */

const axios = require('axios');
const urlApi = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

function fraseBreakingBad() {
    axios.get(urlApi)
        .then(res => {
            let dado = res.data
            const respostaApi = {
                quote: dado[0].quote,
                author: dado[0].author
            }
            console.log(`Essa é uma frase do seriado Breaking Bad:${respostaApi.quote}`)
            console.log(`Ela foi dita por:${respostaApi.author}`)
        })  
        .catch(err => {
            console.log(err)
        })

}
fraseBreakingBad()