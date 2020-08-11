const rs = require('readline-sync')
const axios = require('axios')
const url = 'https://yesno.wtf/api'

let respostaUsuario = rs.question('Digite "yes" ou "no" :\n')

console.log('A resposta do usuário foi ' + respostaUsuario)

function pegaRespostaApi () {
    axios.get(url)
    .then(res => {
      let respostaDaApi = res.data.answer

    if (respostaUsuario === respostaDaApi) {
        console.log('Parabéns, você acertou!')
    } else {
        console.log('Droga, você errou!')
    }
    })
    .catch(err => {

    })
}

pegaRespostaApi()

