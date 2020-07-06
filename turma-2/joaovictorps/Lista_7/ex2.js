function numeroMaior(n1, n2) {
    if (n1 > n2) {
        return n1
    } else if (n1 < n2) {
        return n2 
    } else {
        return 'Numeros Iguais'
    }
}

console.log(numeroMaior(7, 9))