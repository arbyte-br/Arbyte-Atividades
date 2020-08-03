/*(OBRIGATORIO) Solicite ao usuário para inserir yes ou no
Após isso utilize a API https://yesno.wtf/api
Esta api traz um dado aleatório yes ou no
No final imprima se o usuário acertou ou não*/

const axios = require('axios')
const rs = require('readline-sync')
const url = 'https://yesno.wtf/api'

let user = rs.questionInt('Tente acertar.\n[1] - SIM\n[2] - NAO\n')
if(user === 1){
    user = 'yes'
} else {
    user = 'no'
}

axios.get(url)
    .then(res => {
        if(user === res.data.answer){
            console.log("Você acertou.")
        } else {
            console.log('Errooooooou!.')
        }
    }) 

