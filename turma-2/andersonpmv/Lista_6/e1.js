let rs = require('readline-sync');

let jogadorA = rs.question('E a vez do jogador A: ');
let jogadorB = rs.question('E a vez do jogador B: ');


let jogadorAResposta = [];
let jogadorBResposta = [];

let mesmaResposta = [];

for(let cont = 0; cont <10; cont++){

    if(cont === 0){
        console.log(`vez do ${jogadorA}: `);
    }    

    if(cont === 5){
        console.log(`vez do ${jogadorB}: `);
    }

    let pergunta = rs.questionInt('Insira os números: ')

    if(cont < 5){
        jogadorAResposta.push(pergunta);
    }
    

    if(cont > 4){
        jogadorBResposta.push(pergunta);
    }

}

for(let cont2 =0; cont2 <5; cont2++){
    let resultado = jogadorAResposta.indexOf(jogadorBResposta[cont2]) >-1;
    let resultado2 = mesmaResposta.indexOf(jogadorAResposta[cont2]) <0;
    if(resultado){
        mesmaResposta.push(jogadorBResposta[cont2]);
    }
}

console.log(mesmaResposta)