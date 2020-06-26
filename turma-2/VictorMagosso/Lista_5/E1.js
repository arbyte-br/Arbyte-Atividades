let rs = require('readline-sync')

let p
let res = ''
let palavra = rs.question('Digite uma palavra: ').toLowerCase()
for(let i = 0; i < palavra.length; i++ ){
   p = palavra.charAt(i)
    if(p == 'a' || p == 'e' || p == 'i' || p == 'o' || p == 'u' ){
        res = res + p.toUpperCase()
    }else{
        res = res + p
    }
}
console.log(res)
console.log('======================')
