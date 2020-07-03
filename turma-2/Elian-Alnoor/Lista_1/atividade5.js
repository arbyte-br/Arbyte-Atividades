// Escreva um programa para ler 3 valores inteiros (considere que  não 
//     serão lidos valores iguais) e escrevê-los em ordem crescente.  
     
let rs = require("readline-sync")

let v1 = rs.question("Digite um valor:\n")

let v2 = rs.question("Digite um valor:\n")

let v3 = rs.question("Digite um valor:\n")

if (v1 > v2 && v1 > v3){
    if(v2 > v3){
        console.log(`${v3}; ${v2}; ${v1}`)
    } else{
        console.log(`${v2}; ${v3}; ${v1}`)
    }
} else if(v2 > v1 && v2 > v3){
    if(v1 > v3){
        console.log(`${v3}; ${v1}; ${v2}`)
    } else{
        console.log(`${v1}; ${v3}; ${v2}`)
    }
    }
  else{
    if(v2 > v1){
        console.log(`${v1}; ${v2}; ${v3}`)
    } else{
        console.log(`${v2}; ${v1}; ${v3}`)
}
  }