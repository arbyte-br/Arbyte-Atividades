let rs= require ('readline-sync')
let jogadorA = rs.question('Insira o nome do jogador 1 ');
let jogadorB = rs.question('Insira o nome do jogador 2 ');

let tamanho = 5;
let listaNúmerosA=[]
let listaNúmerosB=[]
let listaNúmerosdif=[]

 for (i=0; i < 5; i++){
     númeroJogadorA= rs.question(`insira o ${i} numero ${jogadorA}`)
     listaNúmerosA.push(númeroJogadorA)
 }
 for (i=0; i<5; i++){
     númeroJogadorB= rs.question(`insira o ${i} numero ${jogadorB}`)
    listaNúmerosB.push(númeroJogadorB)
}

for (i=0; i < 5; i++){
   if (!listaNúmerosB.includes(listaNúmerosA[i])){
    listaNúmerosdif.push(listaNúmerosA[i], listaNúmerosB[i])
   }
} 
console.log(listaNúmerosdif)

