let rs = require('readline-sync');


let palavra = rs.question('Digite uma palavra: ');


if (palavra.endsWith('al')){
    console.log(palavra);

}
else
{
    console.log('Palavra incorreta!');
}