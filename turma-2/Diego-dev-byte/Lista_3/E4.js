//(OBRIGATÓRIO) Faça um programa que recebe um número e imprima todos os
//números pares de 0 até o número inserido.
//Ex: usuário inseriu 8

let rs =  require('readline-sync')


/* let numeroUsuario = rs.question('Insira um numero \n') */
/* let contador = 0

while (contador <= numeroUsuario){
    if(contador % 2 === 0){
    console.log ('Esse numero ' + " " + contador + " " +  'é' + " " + 'Par')
    }
    contador ++ */ 

    //(OBRIGATÓRIO) Faça um programa que recebe um número e imprima todos os
//números pares de 0 até o número inserido.
//Ex: usuário inseriu 8

let numeroUsuario = rs.question('Insira um numero \n')

let limite = numeroUsuario

for (let i = 0; i <= limite; i ++){
    if(i % 2 === 0){
        console.log ('Esse numero ' + " " + i + " " +  'é' + " " + 'Par')
    }else {
        
    }
}






