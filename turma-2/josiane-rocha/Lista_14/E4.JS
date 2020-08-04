const axios = require('axios')
const rs = require('readline-sync')

const qualCEP = rs.question('Digite um CEP [somente números]: \n')
function getAPI(CEP) {
    axios.get(`https://api.postmon.com.br/v1/cep/${CEP}`)
    .then(res =>{
        const dataAPI = res.data

        const {logradouro, bairro, cidade, estado} = dataAPI

        console.log(`${logradouro} - ${bairro} -  ${cidade} -  ${estado}`)
    })
    .catch(err => {
        console.log(err)
    })
}

getAPI(qualCEP) 