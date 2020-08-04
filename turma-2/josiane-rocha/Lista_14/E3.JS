const axios = require('axios')
const rs = require('readline-sync')

console.log('=== Saiba a temporada e o elenco de cada episódio de Breaking Bad ===')

const numeroEpisodio = rs.question('De qual episódio deseja saber? \n')

function getAPI(episodio) {

    axios.get(` ${episodio}`)
        .then(res => {
            const data = res.data[0]

            const { characters, season } = data

            console.log(`Este episódio faz parte da ${season} temporada, e esse é o elenco: ${characters}.`)
        })

        .catch(err => {
            console.log(err)
        })
} 

getAPI(numeroEpisodio) 