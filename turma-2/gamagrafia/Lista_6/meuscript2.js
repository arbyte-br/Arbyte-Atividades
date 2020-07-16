// OK -Faça um algoritmo que receba o nome de dois jogadores
// OK - Peça 5 números de 1 a 10
// Mostrar os números diferentes que o jogador A colocou diferente do B

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