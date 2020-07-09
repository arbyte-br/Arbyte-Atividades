let rs = require('readline-sync')
let entradaNumero = rs.questionInt('Digite um numero de 1 a 100: \n')
let segundaEntradaNumero = rs.questionInt('Digite mais um numero de 1 a 100: \n')

if(entradaNumero < segundaEntradaNumero){
    while(entradaNumero < segundaEntradaNumero){
    entradaNumero++
     if (entradaNumero == 35  || entradaNumero == 70 ){
        console.log("Ping Pong")
    }else if(entradaNumero % 5 == 0){
        console.log("Pong")
    }else if (entradaNumero % 7 == 0){
        console.log("Ping")
    }else{
    console.log(entradaNumero)
        }
    }
}
else{
    while(segundaEntradaNumero < entradaNumero){
        segundaEntradaNumero++
        if(segundaEntradaNumero == 35  || segundaEntradaNumero == 70 ){
            console.log("Ping Pong")
        }else if(segundaEntradaNumero % 5 == 0){
            console.log("Pong")
        }else if (segundaEntradaNumero % 7 == 0){
            console.log("Ping")
        }else{
        console.log(segundaEntradaNumero)
        }
    }
}