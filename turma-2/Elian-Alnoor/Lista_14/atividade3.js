// )​Faça um algoritmo que receba um número de um episódio de 
// Breaking Bad. 
// Após isso o algoritmo deve imprimir o elenco de personagens e também de qual 
// temporada é este episódio. 
// Caso o episódio seja inválido dizer ao usuário que não existe este episódio. 
// Utilize a api : ​https://www.breakingbadapi.com/api/episodes/​{NUMERO_DO_EPISODIO} 
// Exemplo episodio 10 : ​https://www.breakingbadapi.com/api/episodes/10 
const rs = require ('readline-sync')
const axios = require('axios')
const fs = require('fs')
let url = 'https://www.breakingbadapi.com/api/episodes/'

function Bb(episodio){
    episodio = rs.questionInt('Informe o número do Episódio para saber mais:\n')
    url = url + episodio
    axios.get(url)
    .then(res =>{
        if(res.data[0]){
        console.log(`Este episódio é da temporada ` + res.data[0].season);
        console.log('O elenco de personagens é ' + res.data[0].characters)
        } else {
            throw error;
        }
    })
    
    .catch(err =>{
        console.log('Episódio não existe!')
    })
}

Bb()

