///Escreva um programa que passe por todos os números de 1 a 50
//epara cada um deles imprima na tela se o número é par ou ímpar.
//Caso o númerotambém seja primo, o programa deve dizer que ele é primo.
//(um número primo é umnúmero que só é divisível por ele mesmo e por 1).
//Dica: Neste exercício você podeprecisar de ajuda do operador MÓDULO (%).
//Você também pode precisar criar mais de loop

function ehPrimo(numero){
    let contador = 2
    let achouDivisorAlemDeleMesmoEUm = false
    if(numero === 1){
        return false
    }
    while(contador<numero){
        if(numero%contador===0){
            achouDivisorAlemDeleMesmoEUm = true
        }
        contador++
    }
    if (achouDivisorAlemDeleMesmoEUm){
        return false
    }else{
        return true
    }
}
let contador = 1
let fimContador = 50
while(contador <= fimContador){
    let sobraDaDivisão = contador % 2
    if(sobraDaDivisão === 0){
        console.log(contador, 'Par', ehPrimo(contador)? 'É primo':'Não é primo')
    }else{
        console.log(contador, 'Impar', ehPrimo(contador)? 'É primo':'Não é primo')
    }
    contador++
}