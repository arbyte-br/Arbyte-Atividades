let rs = require('readline-sync')

let raio = rs.questionInt('Digite o raio da esfera: ')

function raioEsfera () {
    console.log(4/3 * Math.PI * Math.pow(raio,3)) 
 }

raioEsfera()


