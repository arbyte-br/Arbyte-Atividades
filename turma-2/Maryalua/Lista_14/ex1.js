/*1. (OBRIGATORIO)​Solicite ao usuário para inserir yes ou no
Após isso utilize a API ​https://yesno.wtf/api
Esta api traz um dado aleatório yes ou no
No final imprima se o usuário acertou ou não*/

const rs = require('readline-sync');
const axios = require('axios');
const urlApi = 'https://yesno.wtf/api';
const respostaDoUsuario = rs.question('Insira "YES" ou "NO":')


function pegaRespostaApi() {
    axios.get(urlApi)
        .then(res => {
            let respostaDaApi = res.data.answer
            console.log(`A API respondeu: ${respostaDaApi}!`)
            console.log(`O Usuário respondeu: ${respostaDoUsuario}!`)
            respostaDaApi === respostaDoUsuario ? console.log('Você acertou!') : console.log('Você errou!')
        })
        .catch(err => {
            console.log(err)
        })
}
pegaRespostaApi()
