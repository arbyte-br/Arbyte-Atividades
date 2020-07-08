var rs = require('readline-sync');

var jogadorA = new Array ();
var jogadorB = new Array ();
var valoresiguais = new Array ();

var nomeJogadorA = rs.question("Qual é o nome do jogador A?: ");
var nomeJogadorB = rs.question("Qual é nome do jogador B?: ");
var tamanhoDasListas = 5;

for(var i = 0; i < tamanhoDasListas; i++){
    let respostajogadorA = rs.questionInt(`Insira um número de 1 a 10 para o jogador ${nomeJogadorA}:  \n`);
    if(respostajogadorA < 1 || respostajogadorA > 10){
    console.log("Favor inserir um número menor que 1 e maior que 10!!!!");
        i--
    } else{
        jogadorA.push(respostajogadorA);
        
        
    }
}

for(var i = 0; i < tamanhoDasListas; i++){
    respostajogadorB = rs.questionInt(`Insira um número de 1 a 10 para o jogador ${nomeJogadorB}:  \n`);
    if(respostajogadorB < 1 || respostajogadorB > 10){
        console.log("\n Favor inserir um número menor que 1 e maior que 10!!!!");
        i--
    
    } else{
        jogadorB.push(respostajogadorB);
        
    }
}

  
for( var i = 0; i < tamanhoDasListas; i++){
    if(jogadorB.includes(jogadorA[i])){
        valoresiguais.push(jogadorA[i])
     }
   }
 
 
 console.log(jogadorA)
 console.log(jogadorB)
 console.log("Esses são os números repetidos entra os usuários: ", valoresiguais.join(', '))

/* jogadorB.push(rs.questionInt(`Insira um número de 1 a 10 para o jogador ${nomeJogadorB}:  \n`));
   jogadorA.push(rs.questionInt(`Insira um número de 1 a 10 para o jogador ${nomeJogadorA}:  \n`));

metodo antigo no qual não consegui fazer a validação do numero ser entre 1 e 10*/





/* Codigo Elaborado do Italo 



let rs = require('readline-sync')
let tamanhoDasListas = 5
let nomeJogador1 = rs.question('Digite o nome do jogador 1: ')
let nomeJogador2 = rs.question('Digite o nome do jogador 2: ')

console.clear()

let listaJogador1 = []
for (let i = 0; i < tamanhoDasListas; i++) {
    let respostaJogador = -1
    while (respostaJogador < 0 || respostaJogador > 10) {
        respostaJogador = rs.questionInt(`Digite um número entre 0 e 10, ${nomeJogador1}: `)
    }
    listaJogador1.push(respostaJogador)
}

console.clear()

let listaJogador2 = []
for (let i = 0; i < tamanhoDasListas; i++) {
    let respostaJogador = -1
    while (respostaJogador < 0 || respostaJogador > 10) {
        respostaJogador = rs.questionInt(`Digite um número entre 0 e 10, ${nomeJogador2}: `)
    }
    listaJogador2.push(respostaJogador)
}

console.clear()        

let numerosRepetidos = []

for(let i = 0; i < tamanhoDasListas; i++) {    
    let itemLista1 = listaJogador1[i]
    for(let j = 0; j < tamanhoDasListas; j++) {
        let itemLista2 = listaJogador2[j]
        let achouNumeroRepetido = itemLista1 === itemLista2
        if (achouNumeroRepetido) {
            let numeroNaoEstaInclusoNaLista = !numerosRepetidos.includes(itemLista1)
            if (numeroNaoEstaInclusoNaLista) {
                numerosRepetidos.push(itemLista1)
            }
        }
    }                                                   
}        
console.log('Estes são os número repetidos: ', numerosRepetidos.join(', '))




*/