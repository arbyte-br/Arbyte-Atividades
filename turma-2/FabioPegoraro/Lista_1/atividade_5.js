//Escreva um programa para ler 3 valores inteiros (considere que  não serão lidos valores iguais) 
//e escrevê-los em ordem crescente.  
 

let rs = require("readline-sync")

let n1 = rs.questionInt("Digite um numero: ")
let n2 = rs.questionInt("Digite um numero: ")
let n3 = rs.questionInt("Digite um numero: ")

let nMenor = 0
let nMeio = 0
let nMaior = 0

//achando o numero menor
if(n1 < n2 && n1 < n3){
    console.log("Esse numero é o Menor:" , nMenor = n1)
} else if(n2 < n1 && n2 < n3){
    console.log("Esse numero é o Menor:" , nMenor = n2)
} else {
    console.log("Esse numero é o Menor:" , nMenor = n3)
}

//achando o numero maior
if(n1 > n2 && n1 > n3){
    console.log("Esse numero é o Maior:" , nMaior = n1)
} else if(n2 > n1 && n2 > n3){
    console.log("Esse numero é o Maior:" , nMaior = n2)
} else {
    console.log("Esse numero é o Maior:" , nMaior = n3)
}

//achando o numero do meio
if(n1 !== nMaior && n1 !== nMenor){
    console.log("Esse numero é o do Meio:" , nMeio = n1)
}else if(n2 !== nMaior && n2 !== nMenor){
    console.log("Esse numero é o do Meio:" , nMeio = n2)
} else { 
    console.log("Esse numero é o do Meio:" , nMeio = n3)
}



