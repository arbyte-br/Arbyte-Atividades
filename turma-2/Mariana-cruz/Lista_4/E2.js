// (OBRIGATÓRIO) Escreva um programa que passe por todos os números de 1 a 50 e
// para cada um deles imprima na tela se o número é par ou ímpar. Caso o número
// também seja primo, o programa deve dizer que ele é primo. (um número primo é um
// número que só é divisível por ele mesmo e por 1). Dica: Neste exercício você pode
// precisar de ajuda do operador MÓDULO (%). Você também pode precisar criar mais de
// um loop.
// EX.:
// 1 ÍMPAR PRIMO
// 2 PAR PRIMO

let i = 1

let limite = 50

while (i <= limite){

let x = 2

let primo = true

while (x < i){
    if(i % x == 0){
        primo = false}
        break
     x++
    }

    if (i % 2 == 0){
        if(primo){
        console.log(i, 'PAR PRIMO')
        }
        else{
            console.log(i, 'PAR')
        }
    }
    else if (primo){
        console.log(i, 'ÍMPAR PRIMO')
    }
    else{
        console.log(i, 'ÍMPAR')
    }
    i++
}