/*3. (OBRIGATORIO)​Faça um algoritmo que receba um número de um episódio de
Breaking Bad.
Após isso o algoritmo deve imprimir o elenco de personagens e também de qual
temporada é este episódio. Caso o episódio seja inválido dizer ao usuário que não existe este episódio.
Utilize a api : ​https://www.breakingbadapi.com/api/episodes/​{NUMERO_DO_EPISODIO}
Exemplo episodio 10 : ​https://www.breakingbadapi.com/api/episodes/10*/

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

