const rs = require("readline-sync")

const axios = require("axios")

const url = "https://yesno.wtf/api"

function comparaResposta() {
    axios.get(url)
        .then(res => {
            let respostaUsuario = rs.question("Digite yes ou no\n")
            let respostaDaApi = res.data.answer
            console.log("a resposta certa seria: " + respostaDaApi)
            if (respostaUsuario === respostaDaApi) {
                console.log("voce acertou")
            } else {
                console.log("voce errou")
            }
        })
        .catch(error => {
            console.log(error)
        })
}

comparaResposta()