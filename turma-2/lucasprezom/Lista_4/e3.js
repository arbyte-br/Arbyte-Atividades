let rs = require ('readline-sync')

let n = -1

while (n < 1) {
    n = rs.questionInt ('Digite um número:\n')    
} 
let i = 0
let linha = ''
while (i < n) {
    linha+= '*'
    console.log (linha)
    i++
}