const rs = require('readline-sync')
const axios = require('axios')

async function verificarResposta(inputUser){
    const retornoApi = await axios.get('https://yesno.wtf/api')
    const resultado = retornoApi.data
    console.log(`Resultado API -> ${resultado.answer}`)
    console.log(`Resultado User -> ${inputUser}`)

    if (resultado.answer == inputUser){
        console.log('Acertou')
    }else{
        console.log('Errou')
    }
}
verificarResposta(rs.question('Digite yes ou no: '))
    