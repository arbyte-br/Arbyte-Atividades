let rs = require('readline-sync');

let palavra = rs.question('escreva uma palavra: ');

    if(palavra.includes('np')){
        console.log('errado');
    }else if (palavra.includes('nb')){
        console.log('errado');
    }else{
        console.log('certo')
    }


