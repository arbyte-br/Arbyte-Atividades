// (OBRIGATÓRIO) Faça um algoritmo que receba o nome de dois jogadores e após isso
// peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
// jogador B.
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// que apenas o jogador A colocou diferente do B.
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// Esse é um problema classicamente conhecido como Left Join



let rs= require ('readline-sync')
let nomejogadorA= rs.question('Qual seu nome?')
let nomejogadorB= rs.question('Qual seu nome?')
let listaNúmerosA=[]
let listaNúmerosB=[]
let listaNúmerosdif=[]
 for (i=0; i<5; i++){
     númeroJogadorA= rs.question('Informe um número de 1 a 10 ' + nomejogadorA)
     while (númeroJogadorA < 1 && númeroJogadorA > 10){
         console.log(númeroJogadorA)
     }
     listaNúmerosA.push(númeroJogadorA)
 }
 for (i=0; i<5; i++){
     númeroJogadorB= rs.question('Informe um número de 1 a 10' + nomejogadorB)
    while (númeroJogadorB < 1 && númeroJogadorB > 10){
        console.log(númeroJogadorB)
    }
    listaNúmerosB.push(númeroJogadorB)
}
for (i=0; i < 5; i++){
   if (!listaNúmerosB.includes(listaNúmerosA[i])){
    listaNúmerosdif.push(listaNúmerosA[i])
   }
} 
console.log(listaNúmerosdif)