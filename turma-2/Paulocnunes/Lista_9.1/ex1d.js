//Declare uma variável fora de uma função, declare a mesma variável dentro de uma função e depois imprima seu valor depois de executar essa função.

let n1 = 10

function soma(n1, n2) {
    let n1 = 10             //SyntaxError: Identifier 'n1' has already been declared
    let n2 = 15
    return n1 + n2
}