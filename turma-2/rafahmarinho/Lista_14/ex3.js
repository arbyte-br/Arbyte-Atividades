// (OBRIGATORIO)Faça um algoritmo que receba um número de um episódio de
// Breaking Bad.
// Após isso o algoritmo deve imprimir o elenco de personagens e também de qual
// temporada é este episódio.
// Caso o episódio seja inválido dizer ao usuário que não existe este episódio.
// Utilize a api : https://www.breakingbadapi.com/api/episodes/{NUMERO_DO_EPISODIO}
// Exemplo episodio 10 : https://www.breakingbadapi.com/api/episodes/10

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