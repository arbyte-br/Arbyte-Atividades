let rs = require('readline-sync')

let numeros = []

for (let i = 0; i < 3; i++) {
    let valoresInteiros = rs.questionInt('Digite um valor inteiro: ')
    if (numeros.indexOf(valoresInteiros) == -1){
        numeros.push(valoresInteiros)    
    }else{
        numeros.push(valoresInteiros)    
        numeros.pop()
        i--
        console.log('Esse numero ja foi adicionado...')    
    }
}
console.log(numeros.sort())
console.log('==========================')

