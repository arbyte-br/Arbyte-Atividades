let rs = require("readline-sync")

let Nome1 = rs.question("Jogador1....Escreva seu nome  \n")

let Nome2 = rs.question("Jogador2....Escreva seu nome  \n")

let Nums1 = []

let Nums2 = []

for (let i=0; i <5; i++){

Num1 = rs.questionInt('Jogador1...Insira o número ' + i +":" )
if(Num1 <= 10 && Num1 >=1){
    Nums1.push(Num1)

} 
else{
    console.log("insira um numero entre 5 a10")

}
}
for(let i=0; i<5; i++){

    Num2 = rs.questionInt('Jogador2...Insira o número ' + i +":" )
    if(Num2 <= 10 && Num2 >=1){
        Nums2.push(Num2)
    }else{
        console.log("insira um numeor entre 5 a 10")
    }
}

console.log(Nums1)
console.log(Nums2)
