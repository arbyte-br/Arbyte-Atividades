// // (OBRIGATORIO)Solicite ao usuário para inserir yes ou no
// // Após isso utilize a API https://yesno.wtf/api
// // Esta api traz um dado aleatório yes ou no
// // No final imprima se o usuário acertou ou não

const rs = require('readline-sync')
const axios = require('axios')
const urlApi = 'https://yesno.wtf/api'

let respostaUsuario = rs.question('Digite yes ou no: \n')
console.clear()
console.log('Sua resposta foi :' + respostaUsuario)
let respostaDaApi 

function simOUnao() {
    axios.get(urlApi)
        .then(res => {
            respostaDaApi = res.data.answer 
            console.log('A resposta correta é :' + respostaDaApi)
            
            if(respostaDaApi === respostaUsuario){
                console.log('Usuário acertou !')
            }else{
                console.log("Usuário Errou !")
            }
        })
        .catch(err => {
            console.log(err)
        })
        
}

simOUnao()