const axios = require('axios')
const rs = require('readline-sync')
​
let ResUser = rs.question('Escreva yes ou no:\n')
let urlApi = 'https://yesno.wtf/api'
​
axios.get(urlApi)
  .then(respostaDaApi => {
   console.log('Resposta da Api:\n' + respostaDaApi.data.answer)
​
   setTimeout(() => {
    if (respostaDaApi.data.answer === ResUser) {        
      console.log("Acertou! Respostas iguais!");
    } else {
        console.log("Errrrrrou!!");
    }
  }, 0)
​
  }).catch(err => {
      console.log(err)
  })
