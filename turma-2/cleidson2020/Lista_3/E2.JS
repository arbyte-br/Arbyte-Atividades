let rs = require('readline-sync')

/* let num1 = rs.questionFloat('Digite um número: ') 
let num2 = rs.questionInt('Digite outro número: ') 

while(num1 * num2) {
    resultado = num1 * num2;
    console.log(resultado)
    break;
    
} 

 */ 

 console.log('Calculo de Multiplicação JavaScript')

let num1 = rs.questionFloat('Digite o primeiro numero : ') 
let num2 = rs.questionInt('Digite outro número: ') 


let contador = 0;
let resultado = 0;

while(contador < num1) {
    resultado += num2
    contador++;
    
}
console.log(resultado);
     
