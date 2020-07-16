let palavra = 'ljhyt';
let vogais = ['a','e','i','o','u']

for (i = 0; i < palavra.length; i++){
    if (palavra.indexOf(vogais[i])){
        console.log('Há vogais')
    }
    else {
        console.log('Não há vogais')
    }

}
// sempre retorna que há vogais, printa 'há vogais' X vezes sendo X a quantidade
// de caracteres digitado em 'palavra'