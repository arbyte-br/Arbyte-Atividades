const rs = require('readline-sync')
const axios = require('axios')
const url = "https://yesno.wtf/api"

let respostaDoUsuario = rs.question("Insira 'yes' ou 'no' ")
console.log('A resposta do usuario foi: ' + respostaDoUsuario)


function pegaRespostaAPI() {
    axios.get(url)
    .then(res => {
        let respostadaAPI = res.data.answer
        console.log('A resposta da API dentro da funcao foi: ' + respostadaAPI)
        if(respostadaAPI === respostaDoUsuario){
            console.log('Voce acertou!!!')
        } else {
            console.log('Voce errou!!!')
        }
    })
    .catch(err => {
        console.log(err)
    })
}
pegaRespostaAPI()

