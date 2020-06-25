let rs = require('readline-sync') 
let entradaUsuario = rs.questionInt("Insira um numero: ")
let contador = 0


while(contador <= entradaUsuario){

    if (contador % 2 === 0){
        console.log(contador)
    }
    contador++
}
