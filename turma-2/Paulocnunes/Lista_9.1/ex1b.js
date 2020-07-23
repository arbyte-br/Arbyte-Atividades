// b)Declare uma variável dentro de um bloco (if, else, for, etc.) e tente acessar a mesma fora do bloco

let numero1 = 10

if (numero1 > 0) {
    let numero2 = 20 //erro de variavel não definida.
}
console.log(numero1+numero2)