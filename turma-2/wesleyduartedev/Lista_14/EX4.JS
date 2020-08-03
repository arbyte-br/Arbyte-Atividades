/*(OBRIGATÓRIO) Faça um algoritmo que receba uma CEP e diga qual é o endereço
completo (Cidade, rua, estado) deste CEP.
Utilize a API : https://api.postmon.com.br/v1/cep/ {CEP}
Exemplo CEP : https://api.postmon.com.br/v1/cep/89010020/
*/


var rs = require('readline-sync');
const axios = require('axios');


let cep = rs.question(`Digite o numero do seu cep sem traços : `); 
const url =  (`https://api.postmon.com.br/v1/cep/${cep}`);

function dadoApi() {
  axios.get(url)
    .then(res => {

      
      const dados = res.data
    
      const {bairro,cidade,logradouro,estado} = dados
      console.log(`Seu endereço é: \n`);
      console.log(`O BAIRRO é: ${bairro}`)
      console.log(`A cidade é: ${cidade}`)
      console.log(`O logadouro é: ${logradouro} `);
      console.log(`O estado é: ${estado} `);
      
    })
    .catch(err => {
      console.log(`Endereço não achadao! Ou cep esta errado!  ${err}`);

    })


}
console.log("Buscando dados....")

dadoApi()
