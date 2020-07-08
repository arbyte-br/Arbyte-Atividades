function ehPrimo(numero) {
    let contador = 2
    let achouDivisorAlemDeleMesmoEUm = false    
    if (numero === 1) {
        return false
    }    while (contador < numero) {
        if (numero % contador === 0) {
            achouDivisorAlemDeleMesmoEUm = true
        }
        contador++
    }    if (achouDivisorAlemDeleMesmoEUm) {
        return false
    } else {
        return true
    }
}let contador = 1
let fimContador = 50
while (contador <= fimContador) {    let sobraDaDivisao = contador % 2    
    if (sobraDaDivisao === 0) {
        console.log(contador, 'PAR', ehPrimo(contador) ? 'É Primo' : 'Não é primo')
    } else {
        console.log(contador, 'IMPAR', ehPrimo(contador) ? 'É Primo' : 'Não é primo')
    }
    contador++
}