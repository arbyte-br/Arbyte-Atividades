// Escreva um programa que passe por todos os números de 1 a 50 e 
// para cada um deles imprima na tela se o número é par ou ímpar. Caso o número 
// também seja primo, o programa deve dizer que ele é primo. (um número primo é um 
// número que só é divisível por ele mesmo e por 1). Dica: Neste exercício você pode 
// precisar de ajuda do operador MÓDULO (%). Você também pode precisar criar mais de 
// um loop. 
 
// EX.:  
// 1 ÍMPAR PRIMO 
// 2 PAR PRIMO 
// 3 ÍMPAR PRIMO 
// 4 PAR 
// 5 ÍMPAR PRIMO 
// 6 PAR 
// 7 ÍMPAR PRIMO 
// 8 PAR 
// 9 ÍMPAR 
// 10 PAR 

let j = 4

console.log("1 IMPAR") // 1 não é número primo
console.log("2 PAR PRIMO")
console.log("3 IMPAR PRIMO")

while(j<9){
    if (j%2 ===0){
        console.log(`${j} PAR`)
    } else {
        if (j%3 !==0){
            console.log(`${j} IMPAR PRIMO`)
        } else{
            console.log(`${j} IMPAR`)
        }
    }
    j++
}

let i=9
while(i<=50){
    if(i%2 === 0){
        especi = "PAR"
    } else if(i%2 !==0){
        especi = "IMPAR"
        if(i%3 !== 0 && i%4 !==0 && i%5 !==0 && i%7 !==0){
            especi = especi + " PRIMO"
        } 
    } console.log(`${i} ${especi}`)
    i++
}