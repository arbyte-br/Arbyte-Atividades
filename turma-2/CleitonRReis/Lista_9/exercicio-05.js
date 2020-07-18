/*
5 - Escolha 2 exercícios de listas passadas e use alguma das técnicas aprendidas hoje em cada um. 
(Não precisa usar tudo, pode ser só uma das coisas em cada exercício)
*/

/* Escolhi o exercício 2 & 12 da lista FUNCTIONS */
/* Para ambos apliquei o valor DEFAULT para n1 */

/* ======================================== Exercício 2 ======================================== */

function maiorNumero(n1 = 6, n2){
    if(n1 > n2){
       return n1;
    }else{
       return n2;
    }
}

let res = maiorNumero(5, 3);
console.log(res);

/* ======================================== Exercício 12 ======================================== */

// let n1 = rs.questionInt('Por favor, informe um número: ');

// let n2 = rs.questionInt('Por favor, informe outro número: ');

// function maiorNumero(n1 = 9, n2 = 3){
//     if(n1 < n2){
//         return n1;
//     }else{
//         return n2;
//     }
// }

// let res = maiorNumero(n1, n2);
// console.log(`O menor número é: ${res}.`);