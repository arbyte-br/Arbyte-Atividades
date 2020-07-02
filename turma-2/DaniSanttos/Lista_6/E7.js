let rs = require('readline-sync')
let palavra = rs.question('Insira uma palavra: ')

let mp = palavra.includes("mp")
let mb = palavra.includes("mb")

if(mp === true || mb === true){
    console.log('Sua palavra está escrita da maneira correta')
}else{
    console.log('Sua palavra não está escrita da forma certa')
}