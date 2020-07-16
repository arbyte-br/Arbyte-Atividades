let rs = require('readline-sync')

let nome1 = rs.question('Jogador 1 Escreva seu nome: ')
let nome2 = rs.question('Jogador 2 Escreva seu nome: ')
let array1 = [nome1]
let array2 = [nome2]
let numero1
let numero2

for(i= 0; i< 5; i++) {
numero1 = rs.questionInt(nome1 + ' Insira 5 numeros de 1 a 10: ')
if (numero1 <=10) {
    array1.push(numero1)
} 
while (numero1 >10){
numero1 = rs.questionInt('Numero alem de 1 a 10, digite numero dentro de 1 a 10: ')
}
numero2 = rs.questionInt(nome2 + ' Insira 5 numeros de 1 a 10: ')
if (numero2 <=10) {
    array2.push(numero2)
} 
while (numero2 >10){
numero2 = rs.questionInt('Numero alem de 1 a 10, digite numero dentro de 1 a 10: ')
}
}
for(let i=0; i<=5; i++){
if(array1[i] === array2[i]){
    console.log(array1[i])
}
}
console.log(array1)
console.log(array2)