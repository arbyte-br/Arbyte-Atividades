// 3.(OBRIGATORIO)​ Faça um algoritmo que receba um número de um episódio de Breaking Bad.
// Após isso o algoritmo deve imprimir o elenco de personagens e também 
// de qualtemporada é este episódio.
// Caso o episódio seja inválido dizer ao usuário que não existe este episódio.
// Utilize a api : ​https://www.breakingbadapi.com/api/episodes/ ​{NUMERO_DO_EPISODIO}
// Exemplo episodio 10 : ​https://www.breakingbadapi.com/api/episodes/10

const rs = require('readline-sync')
const axios = require('axios')
let url = 'https://www.breakingbadapi.com/api/episodes/'

let respUser = rs.questionInt('Insira o núemro do episódio da Breaking Bad: ')
let urlEpi = url + respUser

console.log(urlEpi)

function dadosBB() {
    axios.get(urlEpi)
        .then(respostaApi => {
            if (respostaApi.data[0]) {
                console.log(`Título: ${respostaApi.data[0].title}`)
                console.log(`Os personagens: ${respostaApi.data[0].characters}`)
                console.log(`Temporada: ${respostaApi.data[0].season}`)
                console.log(`Episódio: ${respostaApi.data[0].episode}`)
            } else {
                console.log('Episódio não encontrado.')
            }
        })
        .catch(err => {
            console.log(err)
        })
}

dadosBB()


