const rs = require('readline-sync')
const axios = require('axios')

const urlApi = 'https://yesno.wtf/api'


let resposta = rs.question("Digite yes ou no")


function buscarResposta (){

    axios.get(urlApi)
    .then(res => {
    let apiResposta = res.data.answer

    if(apiResposta === resposta) {
        console.log("Acertou")
    } else {
        console.log("Errou")
    }
})
    .catch(err => {
        console.log(err)
    })
}

buscarResposta()