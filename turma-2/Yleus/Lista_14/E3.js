const rs = require('readline-sync')
const axios = require('axios')


let url = 'https://www.breakingbadapi.com/api/episodes/'

function breakingBad (){
    
    let episodio = rs.questionInt("Digite o episodio de Breakin Dead que deseja\n")
    let urlCompleta = url + episodio
    console.log(urlCompleta)
    
    axios.get(urlCompleta)
    .then(res => {
        let data = res.data   
        let {season, characters} = data[0]
        console.log(`Temporada: ${season} Elenco: ${characters}`)

        
       
    })
    .catch(err => {
        console.log("Nao existe este episodio")
    })
}

breakingBad()