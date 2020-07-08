let rs = require('readline-sync')


let numero1 = rs.questionInt("Digite um numero de 1 a 100.\n>>")
while(numero1 < 1 || numero1 >100){
   numero1 = rs.questionInt("Digite um numero de 1 a 100.\n>>")
}

let numero2 = rs.questionInt("Digite outro numero de 1 a 100.\n>>")
while(numero2 < 1 || numero1 >100){
   numero1 = rs.questionInt("Digite um numero de 1 a 100.\n>>")
}

 let numeroMaior
 let numeroMenor

 if(numero1 > numero2){
    numeroMaior = numero1
    numeroMenor = numero2
 }
   else {
    numeroMaior = numero2
    numeroMenor = numero1
 }
    
 let contador = numeroMenor
 let fimContador  = numeroMaior

 while(contador <= fimContador){
     

     if(contador % 7 ===0 && contador % 5 === 0){
     console.log("Ping Pong")
     }

     else if (contador % 7 === 0){
     console.log("Ping")
     }

     else if (contador % 5 === 0){
     console.log("Pong")
     }
     else{

     console.log(contador)
   }
    contador++
     
 }

