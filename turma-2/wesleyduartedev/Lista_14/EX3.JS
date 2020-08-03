/*(OBRIGATORIO) Faça um algoritmo que receba um número de um episódio de
Breaking Bad.
Após isso o algoritmo deve imprimir o elenco de personagens e também de qual
temporada é este episódio.
Caso o episódio seja inválido dizer ao usuário que não existe este episódio.
Utilize a api : https://www.breakingbadapi.com/api/episodes/ {NUMERO_DO_EPISODIO}
Exemplo episodio 10 : https://www.breakingbadapi.com/api/episodes/10 */

var rs = require('readline-sync');
const axios = require('axios');
const url =`https://www.breakingbadapi.com/api/episodes/`;

  rs = rs.question(`Digite o numero do episódio: `);
  api =`https://www.breakingbadapi.com/api/episodes/${rs}`;


function dadoApi() {

    axios.get(api)
        .then(res => {
           console.log(`Elenco em baixo \n`);
           console.log(res.data[0].characters)
           console.log(`Epsódio: ${res.data[0].episode}`);


        })
        .catch(err => {
            console.log(`Epsódio não achado!!!  ${err}`);

        })


}
console.log("Buscando dados....")

dadoApi()