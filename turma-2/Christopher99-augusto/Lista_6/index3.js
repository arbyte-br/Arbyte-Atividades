let readline = require("readline-sync")

let jogador1 = readline.question("Nome do jogador 1 ? ")

let jogador2 = readline.question("Nome do jogador 2 ? ")

let array1 = []

let array2 = []

for (i = 0; i < 5; i++) {

    let numero = readline.questionInt("Por favor ${jogador1}, insira um numero : ")
   
    array1.push(numero)
}
for (i = 0; i < 5; i++) {
    
    let numero = readline.questionInt("Por favor ${jogador2}, insira um numero: ")
    
    array2.push(numero)
}
for (i = 0; i < 5; i++) {
    
    let elemento = array1[i]
    
    if (array2.includes(elemento))  {
        
    }
    else { 
        
        array2.push(elemento)
    }
    
}

// .join = As conversões em string de todos os elementos de um array são juntados em apenas uma string.
// Sintaxe arr.join([separador = ','])

// Por fim utilizamos a função '.join' para imprimir o array 'array2' como uma string separada por virgulas.
console.log(`Os números inseridos foram: ${array2.join(',')}`)