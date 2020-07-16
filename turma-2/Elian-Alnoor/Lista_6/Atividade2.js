/*(OBRIGATÓRIO)​ Faça um algoritmo que receba o nome de dois jogadores e após isso 
peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o 
jogador B.  
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números 
que apenas o jogador A colocou diferente do B. 
EX: Jogador A : 1, 2, 3, 4, 5 
Jogador B : 1,2,3,8,7 
Algoritmo imprime : 
Esse é um problema classicamente conhecido como Left Join */

let rs = require("readline-sync")

let Nome1 = rs.question("Jogador1....Escreva seu nome  \n")

let Nome2 = rs.question("Jogador2....Escreva seu nome  \n")

let Nums1 = []

let Nums2 = []

let Dif = []

let x

console.clear()

for (let i=0; i <5; i++){

Num1 = rs.questionInt(`${Nome1}...insira um número entre 1 e 10: `)
if(Num1 <= 10 && Num1 >= 1){
    Nums1.push(Num1)
} else{
    console.log("insira um número entre 5 e 10")
    i--
}
}

console.clear()

for (let i=0; i <5; i++){

    Num2 = rs.questionInt(`${Nome2}...insira um número entre 1 e 10: ` )
    if(Num2 <= 10 && Num2 >= 1){
        Nums2.push(Num2)
    } else{
        console.log("insira um número entre 5 e 10")
        i--
    }
    }

    let iguais = []

    console.clear()
    for(let i=0; i<5; i++){
        for(let j=0; j<5; j++){
        
        if(!Nums2.includes(Nums1[i]) && j === Nums2.length -1)

        Dif.push(Nums1[i])
        }
        }
    
    console.log(Dif)
console.log("Os números do jogador A - " + Nome1 + " - são: " + Nums1)
console.log("Os números do jogador A - " + Nome2 + " - são: " + Nums2)