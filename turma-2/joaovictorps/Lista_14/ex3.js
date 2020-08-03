const axios = require('axios')
const rs = require('readline-sync')
const url = 'https://www.breakingbadapi.com/api/episodes/'

let episodio = rs.questionInt('Digite um episodio de Breaking Bad.\n')

axios.get(url + episodio )
    .then(res => {
        console.log('Episódio: ',res.data[0].episode_id)
        console.log('Temporada: ',res.data[0].season)
        console.log('Personagens: ',res.data[0].characters)
    })