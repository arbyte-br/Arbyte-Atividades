const readline = require('readline-sync');

let num = readline.questionInt('Por gentileza insira um numero: ');

if (num % 2 == 0){
    console.log(`Numero ${num} é par!`)    
} else {
    console.log(`Numero ${num} é impar!`)
}