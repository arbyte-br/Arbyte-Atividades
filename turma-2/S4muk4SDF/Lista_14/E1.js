const axios = require('axios')
const rs = require('readline-sync')
const urlApi = 'https://yesno.wtf/api'

let pergunta = rs.question("Escolha 'yes' ou 'no': ")

axios.get(urlApi)
    .then(res => {
        if (pergunta == res.data.answer){
            console.log('Parabéns você acertou!');
        } else {
            console.log('Hmm, você errou :(. Tente novamente.');
        }
        
    })
    .catch(err => {
        console.log(err);
    })



