const rs = require('readline-sync')
const axios = require('axios')
const url = "https://www.breakingbadapi.com/api/episodes/"

let NumeroEpisodio = rs.questionInt('Digite um numero do Ep de Breaking Bad ')


const urlComResposta = `https://www.breakingbadapi.com/api/episodes/${NumeroEpisodio}`
axios.get(urlComResposta)
    .then(res => {
        console.log(res.data[0].season)
        console.log(res.data[0].characters)
    })
    .catch(err => {
        console.log('Esse episodio nao existe' + err)
    })


