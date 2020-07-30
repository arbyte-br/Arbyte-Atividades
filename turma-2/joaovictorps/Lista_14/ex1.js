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
            console.log('Você errou.')
        }
    })