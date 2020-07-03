// Faça um algoritmo que receba o nome de dois jogadores e após isso 
// peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o 
// jogador B.  
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números 
// que apenas o jogador A e B colocou sem repetir nenhum número 
// EX: Jogador A : 1, 2, 3, 4, 5 
// Jogador B : 1,2,3,8,7 
// Algoritmo imprime : 

let rs = require("readline-sync")

let Nome1 = rs.question("Jogador1....Escreva seu nome  \n")

let Nome2 = rs.question("Jogador2....Escreva seu nome  \n")

let Nums1 = []

let Nums2 = []

let lista = []

console.clear()

for (let i=0; i <5; i++){

Num1 = rs.questionInt('Jogador1...Insira o número ' + i +":" )
if(Num1 <= 10 && Num1 >= 1){
    Nums1.push(Num1)
} else{
    console.log("insira um número entre 1 e 10")
    i--
}
}

console.clear()

for (let i=0; i <5; i++){

    Num2 = rs.questionInt('Jogador2...Insira o número ' + i +":" )
    if(Num2 <= 10 && Num2 >= 1){
        Nums2.push(Num2)
    } else{
        console.log("insira um número entre 1 e 10")
        i --
    }
    }
    
    console.clear()

for (i=0; i<5; i++){
    if(!lista.includes(Nums1[i])){
    lista.push(Nums1[i])
}
}
for (i=0 ; i<5; i++){
    if(!lista.includes(Nums2[i])){
        lista.push(Nums2[i])
}
}
console.log(lista)