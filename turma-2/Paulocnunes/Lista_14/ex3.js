const rs = require('readline-sync')
const axios = require('axios')

let episodio = rs.question('Digite qual episódio de Breaking Bad deseja buscar: ')

while (episodio > 62 || episodio < 1) {

   if (episodio) { 
       console.log('\nEssa série possui somente 62 episódios. Escolha um episódio entre 1 e 62.\n\n')
    
       episodio = rs.question('Digite qual episódio de Breaking Bad deseja buscar: ')
    }
}

const url = 'https://www.breakingbadapi.com/api/episodes/'  

function buscarEpisodio (episodio) {
    
    let urlComEp = url+episodio
    axios.get(urlComEp)
    .then(episodioValido =>{
        console.log('Episódio: ' + episodioValido.data[0].episode_id)
        console.log('Temporada: ' + episodioValido.data[0].season)
        console.log('Personagens: ' + episodioValido.data[0].characters)

    }) 
    .catch(episodioInvalido => {
        console.log('Episódio Invalido!')
    })

}

buscarEpisodio (episodio)