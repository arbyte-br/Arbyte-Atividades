let rs = require('readline-sync')

let i = 1
let mensagem = ''
while(i <= 50) {
    mensagem+= `${i}`
    let primo = true
    if( i%2===0 ) {
        mensagem+= ` PAR`
    } else {
        mensagem+= ` IMPAR`
    }
    let divisor = 2
    while(divisor < i) {

        if(i%divisor===0 ){
            primo  = false  
        }
        divisor++
    }
    if(primo && i > 1) {
        mensagem+= ` PRIMO`
    }
    mensagem+= '\n'
    i++
}
console.log(mensagem)