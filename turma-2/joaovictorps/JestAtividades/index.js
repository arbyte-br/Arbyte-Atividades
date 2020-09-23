//pasta de funções

function soma(n1 = 0, n2 = 0, n3 = 0) {
    return n1 + n2 + n3
}

function multiplica(n1, n2= 1) {
    return n1*n2
}

function somaMultiplica(n1, n2, n3) {
    return (n1 + n2) * n3
} 

function exponenciacao(base, expoente) {
    return base**expoente
}

function menor(n1, n2, n3, n4, n5) {
    return Math.min(n1, n2, n3, n4, n5)
}

function inteiro(number) {
    return Math.round(number)
}

module.exports = {
    soma,
    multiplica,
    somaMultiplica,
    exponenciacao,
    menor,
    inteiro
}