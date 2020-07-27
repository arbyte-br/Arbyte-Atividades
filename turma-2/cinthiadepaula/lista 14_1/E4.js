const rs = require('readline-sync');
const axios = require('axios')
const CEP = rs.question ("Digite seu CEP: ");



function Cep (){
        axios.get(`https://api.postmon.com.br/v1/cep/${CEP}`)

        .then(function (response) {
                console.log(response);
        })
        
        .catch(function(error){
                console.log(error);
        })
}
Cep(CEP)