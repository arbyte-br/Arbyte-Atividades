// Fazer um programa que leia um valor de DDI e informe o nome do país
// Correspondente ao DDI. Por exemplo:
// Se lê 1 imprime "Estados Unidos",
// Se lê 49 imprime "Alemanha",
// Se lê 54 imprime "Argentina",
// Se lê 55 imprime "Brasil",
// Se lê 35 imprime "Portugal".

let rs = require('readline-sync')
let valor = 0
let DDI = rs.questionInt('Digite o DDI que precisa pesquisar: \n')
if(DDI == 1){
    console.log('Estados Unidos')
}else if(DDI == 49){
    console.log('Alemanha')
}else if(DDI == 54){
    console.log('Argentina')
}else if(DDI == 55){
    console.log('Brasil')
}else if(DDI == 35){
    console.log('Portugual')
}else{
    console.log(`O DDI: ${DDI} não listei ainda rs`)
}

