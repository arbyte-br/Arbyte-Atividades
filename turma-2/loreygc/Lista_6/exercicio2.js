let re = require("readline-sync")

let Jogador1 = rs.questionfloat("Qual o nome do 1º jogador ?")

let Jogador2 = rs.questionfloat("Qual o nome do 2º jogador ?")

let numero1 = []

let numero2 = []

console.log("Jogador n°1, digite 5 numeros de 1 a 10")

for (i = 1; i <=5; i++){
    let numero1 = rs.questionint('Numero ${i} : ')
    if (numero1 >=1, numero1 <=5)
    Jogador1.push(numero1)


    numero2 = rs.questionint(Jogador2 + "insira um numero" + i +":")
    Jogador2.push(numero2)

}
for (j = 1; j<=5; j++){
    let numero2 = rs.questionint('Numero ${j} : ')
    if (numero2 >=1, numero2<=5)
    Jogador2.push(numero2)
}