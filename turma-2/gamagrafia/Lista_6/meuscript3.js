//OK- Recebe nome dois jogadores
// OK-Pedir 5 números de 1 a 10
//  algoritmo deve apresentar quais foram os números que apenas o jogador A e B colocou sem repetir nenhum número
// Algoritmos que estão na lista A E B números diferentes

let rs=require ('readline-sync')

let nomeJogadorA= rs.question ('Qual seu nome?')
let nomeJogadorB= rs.question ('Qual seu nome?')

let listaNúmeroA=[]
let listaNúmeroB=[]
let listaFinal=[]

for (i=0; i<5; i++){
    númeroJogadorA= rs.question('Informe um número de 1 a 10 ' + nomeJogadorA)
    while (númeroJogadorA < 1 && númeroJogadorA > 10){
        console.log(númeroJogadorA)
    }
    listaNúmeroA.push(númeroJogadorA)
}

for (i=0; i<5; i++){
    númeroJogadorB= rs.question('Informe um número de 1 a 10' + nomeJogadorB)
   while (númeroJogadorB < 1 && númeroJogadorB > 10){
       console.log(númeroJogadorB)
   }
   listaNúmeroB.push(númeroJogadorB)
}
   for (i=0; i < 5; i++) {
       listaFinal.push(listaNúmeroA[i])
       if (!listaNúmeroA.includes(listaNúmeroB[i])){
           listaFinal.push(listaNúmeroB[i])
       }
   }
console.log (listaFinal)