let rs = require('readline-sync');

let player01 = rs.question('player 01: ');
let player02 = rs.question('player 02: ');


let contPergunt = 0;

let player01Respost = [];
let player02Respost = [];

let equals = [];

for(contPergunt; contPergunt <10; contPergunt++){

    if(contPergunt === 0){
        console.log(`vez do ${player01}: `)
    }    


    if(contPergunt === 5){
        console.log(`vez do ${player02}: `)
    }

    let pergunt = rs.questionInt('insira um numero: ')

    if(contPergunt <=4){
        player01Respost.push(pergunt);
    }
    

    if(contPergunt >4){
        player02Respost.push(pergunt);
    }

}

for(let cont =0; cont <5; cont++){
    let express = player01Respost.indexOf(player02Respost[cont]) >-1;
    let express2 = equals.indexOf(player01Respost[cont]) <0;
    if(express){
        equals.push(player02Respost[cont]);
    }
}

console.log(equals)