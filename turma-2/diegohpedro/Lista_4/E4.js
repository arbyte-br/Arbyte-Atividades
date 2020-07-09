// /(OBRIGATÓRIO) Escreva um programa que calcule a soma de todos os múltiplos de 3
// e de 5 entre 1 e 1000

// let limite = 1000
// let resultado = 0

// for(let i = 0; i < 1000 ; i ++){
//     if(i % 3 === 0 && i % 5 === 0){
//         resultado = resultado + i
//         console.log(resultado)
        
//     }
    
// }

let limite = 1000
let contador = 0
let resultado = 0

while(contador <= limite){
    if (contador % 3 === 0 && contador % 5 === 0){
        resultado =  resultado + contador
        console.log(contador)
    }
    contador++
}

        
        
        
        