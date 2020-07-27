const rs = require('readline-sync');
const axios = require('axios')
const inputUsuario = rs.question ("Digite yes ou no: ");

function acertouOuErrou (){
    const resultadoAPI = axios.get('https://yesno.wtf/api')
    .then ( res =>
        {
            if(res.data.answer == inputUsuario){}
            console.log(' voce acertou', res)
    })
    .catch(error => {
        console.log('errou', error);
    })
}

acertouOuErrou(inputUsuario)