//Faça uma função que recebe, por parâmetro, um valor N e calcula e escreve a tabuada de 1 até 9. 
//Mostre a tabuada na 
//forma: 
//1 x N = N 
//2 x N = 2N ...
// 9 x N = 9N

let rs = require("readline-sync")
let num = rs.questionFloat("Digite um numero:")

console.clear()
function tabuada(){
    for(let i = 1; i <= 9; i++){
        if (i <= 10){
            console.log(`${i} X ${num} = ${i*num}`)
          
        }
    }
}
        
let resultado = tabuada()

