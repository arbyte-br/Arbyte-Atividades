let rs = require('readline-sync');

let player01 = rs.question('player 01: ');
let player02 = rs.question('player 02: ');


let contPergunt = 0;

let player01Respost = [];
let player02Respost = [];

let concat = [];

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
 
   for(let i =0; i<5; i++){

       let concatArrays = player01Respost[i];

       if(player02Respost.includes(concatArrays)){

       }else {
           player02Respost.push(concatArrays)
       }
   }

console.log(`numeros: ${player02Respost.sort()}`)