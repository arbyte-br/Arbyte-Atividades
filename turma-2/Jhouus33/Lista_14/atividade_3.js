// (OBRIGATORIO)Faça um algoritmo que receba um número de um episódio de
// Breaking Bad.
// Após isso o algoritmo deve imp

const rs = require('readline-sync');
const axios = require('axios');
const episodioEscolhido = rs.questionInt('Insira o número de um episódio da série Breaking Bad:');
const urlApi = `https://www.breakingbadapi.com/api/episodes/${episodioEscolhido}`;

function informacoesBreakingBad() {
    axios.get(urlApi)
        .then(res => {
           let dados = res.data
           const respostaApi ={
               season:dados[0].season,
               characters:dados[0].characters
           }
         console.log(`Você inseriu o episódio de número: ${episodioEscolhido}`);
         console.log(`Ele faz parte da temporada: ${respostaApi.season}`);
         console.log(`O elenco desse episódio é o: ${respostaApi.characters}`)
        })
        .catch(err => {
            console.log('Episódio inexistente!')
        })
}
informacoesBreakingBad()
