let rs = require('readline-sync')

item = rs.question('Digite algo e veja como fica de trás para frente: ').toUpperCase().split('')

while(true){
    console.log(item.reverse().join(''))
    break
}
console.log('================')

