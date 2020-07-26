let rs = require("readline-sync")

let enquantoForErrado = true
let numero1;
let numero2;

while(enquantoForErrado) {
      numero1 = rs.questionFloat("Digite um  primero numero de 1 a 100  _______ ")

    if(numero1 >= 1 && numero1 <= 100) {
     enquantoForErrado = false
    } else{
        console.log('numero invalido digite de 1 á 100')
    }
}
     enquantoForErrado = true // alterei essa variavel para poder utilizar ela á baixo pois no outro ja havia sido alterada para false
while(enquantoForErrado){
    numero2 = rs.questionFloat ("Digite um segundo numero de 1 a 100  ____________")
    if(numero2 >= 1 && numero2 <= 100){
        enquantoForErrado= false
    }else{
        console.log("Numero invalido digite novamente de 1 a 100")
    }
}
if(numero1 > numero2){
    
if(numero2 % 7 ===0 && numero2 % 5 === 0){
        console.log("PING PONG")
}
    else if(numero2 % 7 ===0){
       console.log("Ping")
    } else if(numero2 % 5 ===0){
       console.log("Pong")
    }else{
        console.log(numero2)
    }

    if(numero1 % 7 === 0 && numero1 % 5 === 0){
        console.log("PING")
    }  else if (numero1 % 7 === 0){
        console.log("PING")
    }  else if(numero1 % 5 === 0){
        console.log("PONG")
    } else{
        console.log(numero1)
    }

} else{
    if(numero1 % 7 === 0 && numero1 % 5 === 0){
        console.log("PING PONG")
    }  else if (numero1 % 7 === 0){
        console.log("PING")
    }  else if(numero1 % 5 === 0){
        console.log("PONG")
    } else{
        console.log(numero1)
    }
    
    if(numero2 % 7 ===0 && numero2 % 5 === 0){
    console.log("PING PONG")
}
    else if(numero2 % 7 ===0){
   console.log("Ping")
}   else if(numero2 % 5 ===0){
   console.log("Pong")
}   else{
    console.log(numero2)
}

}



