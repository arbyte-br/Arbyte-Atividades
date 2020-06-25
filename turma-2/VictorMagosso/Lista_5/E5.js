let rs = require('readline-sync')

let n = rs.questionInt('Digite um número e descubra seu fatorial: ')
let num = n
while(true){
    for(n; n>0; n--){
        console.log(num*n)
    }
    n = rs.question('Digite um número e descubra seu fatorial ou digite "B" para sair: ').toUpperCase()
    //tentei com if ternario mas não aceitou o "break"
    //n == 'B' ? break : n = parseInt(n)
    if(n == 'B'){
        break
    }else{
        n = parseInt(n)
    }
}
console.log('==================')