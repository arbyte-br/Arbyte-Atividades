//Escreva um programa que passe por todos os números de 1 a 50 e para cada um deles imprima na tela se o número é par ou ímpar. OK
//Caso o número também seja primo, o programa deve dizer que ele é primo. 
//(um número primo é um número que só é divisível por ele mesmo e por 1). 
//Dica: Neste exercício você pode precisar de ajuda do operador MÓDULO (%). 
//Você também pode precisar criar mais de um loop. 
 
//descobrindo se o numero é par ou impar
let contador = 1
let fimContador = 50


while ( contador <= fimContador){
    let numPar = contador % 2
    if (numPar === 0){
        console.log(contador, "Par")
        if (contador / contador && contador / 1){
            console.log ("Primo")
        }
    }else{
        console.log(contador, "Impar")
    }    
       contador++
}
//======================