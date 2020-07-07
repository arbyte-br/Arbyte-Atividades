// Recebe uma palavra
// Verificar se termina com al
// se termina imprime a palavra
// senão imprime palavra não identificado

let rs= require ('readline-sync')

let palavra= rs.question('Qual sua Palavra escolhida')

if (palavra.endsWith('al')){
    console.log(palavra)
}else{
    console.log('palavra indefinida')
}
