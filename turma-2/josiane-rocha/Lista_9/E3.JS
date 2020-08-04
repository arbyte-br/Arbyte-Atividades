let rs = require('readline-sync')
const isOdd = require('is-odd');

let usuario = rs.question('Insira uma número: ')


if(usuario % 2 === 0 ){
    isOdd(0)
    console.log(`${usuario} é PAR`)

}else{
    isOdd(1)
    console.log(`${usuario} é IMPAR`)


}

//não funciona 
