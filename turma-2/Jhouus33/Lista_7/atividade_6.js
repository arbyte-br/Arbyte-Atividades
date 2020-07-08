let rs = require('readline-sync')

let n1 = rs.questionInt('Digite um número: ')

function numeroX(n0a10) {
    if(n1 > 10){
        return 'Esqueci de avisar, o número deve ser de 1 a 10!'
    }else if(n1 < 1) {
        return "Maior que 0 pf!"
     }else { 
        return "Número Ok"
      }
    
}
console.log(numeroX)
    
