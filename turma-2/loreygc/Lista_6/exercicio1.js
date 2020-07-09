let rs = require("readline-sync")

let Nome1 = rs.question("Jogador1....Escreva seu nome  \n")

let Nome2 = rs.question("Jogador2....Escreva seu nome  \n")

let Num1 = []

let Num2 = []

for (let i=0; i <5; i++){

Num1 = rs.questionInt('Jogador n°1, por favor, insira um número: ' + i +":" )
if(Num1 <= 10 && Num1 >=1){
    Num1.push(Num1)

} 
else{
    console.log("Insira um numero entre 1 e 10")

}
}
for(let i=0; i<5; i++){

    Num2 = rs.questionInt('Jogador n°2, por favor, insira um número: ' + i +":" )
    if(Num2 <= 10 && Num2 >=1){
        Num2.push(Num2)
    }else{
        console.log("Insira um número entre 1 a 10")
    }
}

console.log(Num1)
console.log(Num2)