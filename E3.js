// (OBRIGATORIO)Faça um algoritmo que receba um número de um episódio de
// Breaking Bad.
// Após isso o algoritmo deve imprimir o elenco de personagens e também de qual
// temporada é este episódio.
// Caso o episódio seja inválido dizer ao usuário que não existe este episódio.
// Utilize a api : https://www.breakingbadapi.com/api/episodes/{NUMERO_DO_EPISODIO}
// Exemplo episodio 10 : https://www.breakingbadapi.com/api/episodes/10

const axios = require ('axios')
const rs = require('readline-sync')

let respostaUsuario = rs.question('Insira o número do episódio: ')
let api = `https://www.breakingbadapi.com/api/episodes/${respostaUsuario}`

axios.get(api)
.then( res =>{
    console.log('Elenco: ')
    console.log(res.data[0].characters)
    console.log(`Temporada: ${res.data[0].season}`)
})

