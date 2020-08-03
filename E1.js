// 1. (OBRIGATORIO)Solicite ao usuário para inserir yes ou no
// Após isso utilize a API https://yesno.wtf/api
// Esta api traz um dado aleatório yes ou no
// No final imprima se o usuário acertou ou não

const rs = require('readline-sync')
const axios = require('axios')
const url = 'https://yesno.wtf/api'
let usuario = rs.question("Insira  yes ou no: ")

function pegarRespostaApi() {
    axios.get(url)
        .then(res => {
            let respostaDaApi = res.data.answer

            console.log(`Resposta da API foi: ${respostaDaApi}`)

            if (respostaDaApi === usuario) {
                console.log('Você Acertou')

            } else {
                console.log('Você Errou!')
            }

            respostaDaApi === usuario ? console.log('Acertou Miseravi!') : console.log('Você errou!')

        })
        .catch(err => {
            console.log(err)

        })
} pegarRespostaApi()