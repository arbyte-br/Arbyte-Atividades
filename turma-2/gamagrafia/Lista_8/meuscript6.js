//Peça o nome de 2 usuários;
//Para cada usuário, peça 1 número; 
//Imprima na tela qual usuário digitou o maior número

let rs=require('readline-sync')

let nome1= rs.question ('Qual teu Nome?')
let nome2= rs.question ('Qual teu Nome?')

let numero1= rs.questionInt ('Qual teu Numero?')
let numero2= rs.questionInt ('Qual teu Numero?')

let usuario1={nome: nome1, numero: numero1}
let usuario2={nome: nome2, numero: numero2}

if(usuario1.numero > usuario2.numero) {
    console.log(`O Maior número foi o de ${usuario1.nome} e é o número ${usuario1.numero}`)
} else {
    console.log(`O Maior número foi o de ${usuario2.nome} e é o número ${usuario2.numero}`)
}