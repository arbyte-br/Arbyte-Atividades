var rs = require('readline-sync');
var numero = rs.questionInt('Insira o número 50 para ver os ímpares, pares e primos: ');
var i = 1;
var cont = 2;
var ehPrimo = true;

while( i <= numero){
    while(cont < i){
        if(i % cont === 0){
            ehPrimo = false;
            break;
        } 
        cont ++
    }

    if( i% 2 == 0){
        if(ehPrimo){
            console.log(`${i} é par e primo`);
            
        } else {
            console.log(`${i} par`);
        }
    } else {
        if (ehPrimo && i == 1){
            console.log(`${i} É APENAS IMPAR!!!!`) //nao consegui rodar 1 sendo so impar sem fazer isso
        }
         else if (ehPrimo){
            console.log(`${i} é impar e primo`);
        } 
        else {
            console.log(`${i} impar`);
        }
    }
    
    ehPrimo = true
    cont = 2
    i++
}