const axios = require('axios')
const rs = require('readline-sync')

let perguntaEP = rs.questionInt('Digite o número do episódio que deseja saber: ')
let urlApi = `https://www.breakingbadapi.com/api/episodes/${perguntaEP}`

axios.get(urlApi)
    .then(res => {
        console.log(`Título: ${res.data[0].title}`);
        console.log(`Temporada: ${res.data[0].season}`);
        console.log(`Elenco: ${res.data[0].characters}`);
    })
    .catch(err => {
        console.log(err);
    })