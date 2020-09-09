/*(OBRIGATORIO) Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e
também seu autor
Utilize a API : https://breaking-bad-quotes.herokuapp.com/v1/quotes
*/

var rs = require('readline-sync');
const axios = require('axios');
const url = "https://breaking-bad-quotes.herokuapp.com/v1/quotes";



function dadoApi() {

    axios.get(url)
        .then(res => {
            let respostaDaFrase = res.data[0].quote;
            let respostaDoAutor = res.data[0].author;
            console.log(`Informações do epsódio \n`);
            console.log("A frase é: "  + respostaDaFrase);
            console.log("O autor é: " + respostaDoAutor)


        })
        .catch(err => {
            console.log(`Resposta deu erro ${err}`);

        })


}
console.log("Buscando dados....")

dadoApi()