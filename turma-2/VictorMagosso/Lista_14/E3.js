const rs = require('readline-sync')
const axios = require('axios')

async function verificarEpisodio(epUser){
        try{
            const retornoApi = await axios.get(`https://www.breakingbadapi.com/api/episodes/${epUser}`)
            const retornoTratado = retornoApi.data
            console.log(`Elenco -> ${retornoTratado[0].characters}`)
            console.log(`Temporada -> ${retornoTratado[0].season}`)
        }catch (erro){
            console.log('Não existe esse episodio')
    }
}
verificarEpisodio(rs.question('Informe um episodio: '))
    .then(console.log)