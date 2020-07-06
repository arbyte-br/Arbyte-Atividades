
let rs = require('readline-sync');

let jogadorA = rs.question('nome do primeiro jogador ');
let jogadorB = rs.question('nome do segundo jogador ');

let listaNúmerosdif=[]
let numJogadorA = [];
let numJogadorB = [];
cont = 5;



for (i = 0; i < cont; i++) {
    numJogadorA[i] = rs.question(`${jogadorA} digite 5 numeros `);

}



for (i = 0; i < cont; i++) {
    numJogadorB[i] = rs.question(`${jogadorB} digite 5 numeros `);

}


for (i=0; i < 5; i++){
    if (!numJogadorB.includes(numJogadorA[i])){
     listaNúmerosdif.push(numJogadorA[i])
    }
 } 
 console.log(listaNúmerosdif)
