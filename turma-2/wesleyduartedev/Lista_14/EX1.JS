/*(OBRIGATORIO) Solicite ao usuário para inserir yes ou no
Após isso utilize a API https://yesno.wtf/api
Esta api traz um dado aleatório yes ou no
No final imprima se o usuário acertou ou não*/


var rs = require('readline-sync');
const axios = require('axios');
const url = 'https://yesno.wtf/api';

rs = rs.question(`Digite o Yes ou No!: `);


function dadoApi() {

    axios.get(url)
        .then(res => {
            let respostaDaApi = res.data.answer;
            console.log(`Os dados da API estão em baixo \n`);
            console.log(respostaDaApi);


            if (respostaDaApi === rs) {
                console.log('Você Acertou')

            } else {
                console.log('Você Errou!')



            }

        })
        .catch(err => {
            console.log(`Resposta deu erro ${err}`);

        })


}
console.log("Buscando dados....")

dadoApi()