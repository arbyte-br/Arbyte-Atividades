let rs = require('readline-sync');

function primo(numero) {
    let i = 0;
    for (let contador =0; contador < numero; contador++){
        let condicao = numero%(contador) === 0;

        if(condicao)
        {
            i++;

        }
    }
    console.log(i);
    return i < 2;

}

let num = rs.question('Insira um numero: ');
if(primo(num))
{
    console.log('O numero é primo');

}
else{
    console.log('O numero nao é primo');

}
