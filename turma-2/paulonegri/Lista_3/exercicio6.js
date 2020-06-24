//Faça um algoritmo que receba uma palavra e imprima ela ao contrário.EX: 
//usuário informou BANANAAlgoritmo imprime:ANANAB

let rs= require("readline-sync")
console.log("Bem vindo!")
let palavra = rs.question("Insira qualquer palavra aqui para ve-la ao contrario\n")
console.log("======================================================")
while(palavra !== "exit"){
       console.log(palavra.split('').reverse().join('') )
       console.log("======================================================")
       palavra = rs.question("Insira uma nova palavra, caso queira parar digite exit!\n")
}