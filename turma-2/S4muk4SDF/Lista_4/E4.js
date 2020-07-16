let n1 = 1000

let i = 0

let multiplosDe3 = 0

let multiplosDe5 = 0

multiplosDe3e5 = 0

while (i < n1) {

    if (i % 3 == 0) {
        multiplosDe3 += i
    } if (i % 5 == 0) {
        multiplosDe5 += i
    } if (i % 3 == 0 && i % 5 == 0) {
        multiplosDe3e5 += i
    }
    i++

}

let soma = multiplosDe3 + multiplosDe5 - multiplosDe3e5

console.log(`A soma de todos os múltiplos de 3, de 1 a 1000 é: ${multiplosDe3}.`)
console.log(`A soma de todos os múltiplos de 5, de 1 a 1000 é: ${multiplosDe5}.`)
console.log(`A soma de todos os múltiplos de 3 e 5, de 1 a 1000 é: ${soma}.\n`)