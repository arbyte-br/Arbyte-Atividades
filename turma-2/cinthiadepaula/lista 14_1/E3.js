const rs = require('readline-sync');
const axios = require('axios')
const episode = rs.question ("Digite o numero do Episodio: ");



function Episodio (){
        axios.get(`https://www.breakingbadapi.com/api/episodes/${episode}`)

        .then(function (response) {
                console.log(response);
        })
        
        .catch(function(error){
                console.log(error);
        })
}
Episodio(episode)