/*Escreva um programa que calcule a soma de todos os múltiplos de 3
e de 5 entre 1 e 1000.*/

let somaMultiplos= 0
let i = 1
let tres

while(i <= 1000){
    
    if(i % 3 === 0 || i % 5 === 0 ){
        somaMultiplos = somaMultiplos + i
        
    }
    i++
}
console.log(somaMultiplos)