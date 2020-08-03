// Solicite ao usuário para inserir yes ou no
// Após isso utilize a API https://yesno.wtf/api
// Esta api traz um dado aleatório yes ou no
// No final imprima se o usuário acertou ou não

const rs = require('readline-sync')
const axios = require('axios')

function getAPI() {
    axios.get('https://yesno.wtf/api')
        .then(res => {
            let dados = res.data

            const dataAPI = {
                answer: dados.answer,
                forced: dados.forced,
                image: dados.image
            }

            let yOrN = rs.question('Insira YES ou NO: ').toLowerCase()

            while (!(yOrN == 'yes' || yOrN == 'no')) {
                yOrN = rs.question('Insira YES ou NO: ')
            }

            const correct = 'Você acertou! :)'
            const incorrect = 'Você errou! :('

            console.log('Essa é a resposta da API: ' + dataAPI.answer)
            console.log('Usuario respondeu: ' + yOrN)

            yOrN = dataApi.answer ? console.log(correct) : console.log(incorrect)

        })
        .catch(err => {
            console.log(err)
        })
}

getAPI()
