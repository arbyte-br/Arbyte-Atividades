const rs = require('readline-sync')
const axios = require('axios')
const respostaUser = rs.questionInt('Digite o numero do episodio que você deseja buscar informações: ')


consomeApi = () => {
    const api = axios.get(`http://breakingbadapi.com/api/episodes/${respostaUser}`)

        .then(({data}) => {
            const {characters, season,} = data[0]
            console.log(`Elenco do episodio ${respostaUser}: ${characters}`)
            console.log(`Temporada ${season}`)
            
            
        })

        .catch(error => {
            console.log(error)
        })
}

consomeApi()