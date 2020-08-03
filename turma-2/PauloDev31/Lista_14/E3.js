// OBRIGATORIO)Faça um algoritmo que receba um número de um episódio de
// Breaking Bad.
// Após isso o algoritmo deve imprimir o elenco de personagens e também de qual
// temporada é este episódio.
// Caso o episódio seja inválido dizer ao usuário que não existe este episódio.
// Utilize a api : https://www.breakingbadapi.com/api/episodes/{NUMERO_DO_EPISODIO}
// Exemplo episodio 10 : https://www.breakingbadapi.com/api/episodes/10

const rs = require('readline-sync')
const axios = require('axios')

let numEpi = rs.question('Digite um numero para conhecer um episódio de Breaking Bad: \n')
let urlCompleta = "https://www.breakingbadapi.com/api/episodes/" + numEpi

buscarEpisodio()
function buscarEpisodio() {
    console.log('Estamos buscando informações sobre o episódio ' + numEpi + '...')
    axios.get(urlCompleta)
        .then(res => {
            console.log(`O episódio ${res.data[0].title} faz parte da temporada ${res.data[0].season}`)
            console.log(`E o seu elenco é comporto por ${res.data[0].characters}`)
        })
        .catch(err => {
            console.log(err)
        })
}