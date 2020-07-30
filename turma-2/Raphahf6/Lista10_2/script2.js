const axios = require('axios')

const api = axios.get('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sp') // consome a url da api

.then(response =>{
  const dados = response.data // joga os dados da api para uma variavel 'dados'
    
  const {uf, state, cases, deaths, suspects, refuses, datetime} = dados // aqui estamos desestruturando o objeto

  console.log(cases) // imprime o dado que você quer
})
