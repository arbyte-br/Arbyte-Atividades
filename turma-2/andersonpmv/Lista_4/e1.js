let user = require('readline-sync');

let user1 = user.questionInt('Digite um numero entre 1 e 100: ');

while(user1 < 1 || user1 > 100){
    console.log('Voce digitou um valor errado, digite novamente');
    user1 = user.questionInt('Digite um numero entre 1 e 100: ');
}

let user2 = user.questionInt('Digite outro numero entre 1 e 100: ');

while(user2 < 1 || user2 > 100){
    console.log('Voce digitou um valor errado, digite novamente');
    user2 = user.questionInt('Digite outro numero entre 1 e 100: ');
}

if(user1 <= user2){
    while(user1 < user2 + 1){
        if(user1 % 7 == 0 && user1 % 5 == 0){
            console.log('Ping Pong');
        }else if(user1 % 7 == 0){
            console.log('Ping');
        }else if (user1 % 5 == 0 ){
            console.log('Pong');
        }else{
            console.log(user1);
        }
         user1 ++;
    }
}else if (user2 <= user1){
    while(user2 < user1 + 1){
        if(user2 % 7 == 0 && user2 % 5 == 0){
            console.log('Ping Pong');
        }else if(user2 % 7 == 0){
            console.log('Ping');
        }else if (user2 % 5 == 0 ){
            console.log('Pong');
        }else{
            console.log(user2);
        }
            
         user2 ++;        
    }
}
