let rs = require('readline-sync')

let pergunta = rs.question('Digite algo: ').toUpperCase()
let n = 0
while(n <= pergunta.length){
    console.log(pergunta.charAt(n))
    n++
  
}
console.log('=========================')
