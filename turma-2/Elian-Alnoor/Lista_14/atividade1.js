// Solicite ao usuário para inserir yes ou no 
// Após isso utilize a API ​https://yesno.wtf/api 
// Esta api traz um dado aleatório yes ou no  
// No final imprima se o usuário acertou ou não 

const rs = require('readline-sync')
const axios = require('axios')
const url = 'https://yesno.wtf/api'

const respostaUsuario = rs.question('Responde com yes ou no:\n')

console.log('Resposta do usuário foi ' + respostaUsuario)

function respostaApi() {
    axios.get(url)
    .then(res => {
        console.log('resposta da Api foi ' + res.data.answer)
        if(res.data.answer === respostaUsuario){
            console.log('Você acertou!')
        } else{
            console.log('Você errou!')
        }
    })
    .catch(error => {
        console.log(error)
    })
}

respostaApi()