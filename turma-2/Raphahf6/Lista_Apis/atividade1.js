const axios = require('axios')
const rs = require('readline-sync')
const url = 'https://yesno.wtf/api'

let resposataUsuario = rs.question('Digite yes ou no: ')



function comparaRespostaAPi() {
    const api = axios.get(url)
        .then(response => {
            const apiResponse = response.data
            if(resposataUsuario === apiResponse){
                console.log('Você acertou')
            } else{
                console.log('Você errou')
            }
        })


        .catch(error => {
            console.log(error)
        })
}

comparaRespostaAPi()

