let rs = require('readline-sync')

let num1 = rs.questionInt('Digite um numero de 1 a 100: ')
let num2 = rs.questionInt('Digite outro numero de 1 a 100: ')
let numMaior
let numMenor
while(num1 < 0){
 num1 = rs.questionInt('Digite novamente um numero entre 1 a 100: ')
}
while(num2 < 0){
 num2 = rs.questionInt('Digite novamente um numero entre 1 a 100: ')
}
while(num1 > 100){
    num1 = rs.questionInt('Digite novamente um numero entre 1 a 100: ')
   }
while(num2 > 100){
    num2 = rs.questionInt('Digite novamente um numero entre 1 a 100: ')
   }
if(num1 > num2){
    numMaior = num1
    numMenor = num2
} else {
    numMaior = num2
    numMenor = num1
}
let contador = numMenor

while(contador <= numMaior){
  let numeroAtual = contador

  if(numeroAtual % 7 ===0 && numeroAtual % 5 ===0){
      console.log('Ping Pong')
  }
  else if(numeroAtual % 7 ===0){
      console.log('Ping')
  }
  else if(numeroAtual % 5 ===0){
      console.log('Pong')
  }
  console.log(numeroAtual)
    contador++
}