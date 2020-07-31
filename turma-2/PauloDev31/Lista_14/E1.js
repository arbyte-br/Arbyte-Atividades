// (OBRIGATORIO)Solicite ao usuário para inserir yes ou no
// Após isso utilize a API https://yesno.wtf/api
// Esta api traz um dado aleatório yes ou no
// No final imprima se o usuário acertou ou não

const rs = require('readline-sync')
const axios = require('axios')
const url = 'https://yesno.wtf/api'

let respUsuario = rs.question('Insira yes ou no: \n')

axios.get(url)
    .then(res => {
        respUsuario === res.data.answer ? console.log('Acertou') : console.log('Errou')
        console.log(`A respota é ${res.data.answer}`)
    })

    .catch(err => {
        console.log('Deu erro!')
    })