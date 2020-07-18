// <!DOCTYPE html>
// <html>
//  <head>
//    <title>Curso JavaScript Progressivo</title>
//     <button onclick="contar()">Contar</button><br />

//     <script type="text/javascript">
//    function contar(){
//     count = 2;

//     while (count<=100){
//      document.writeln(count+"<br />");
//      count = count + 2;
//     }
//    }
//     </script>
//  </head>
// </html>

/*
10. Faça um algoritmo que receba um número e imprima todos seus divisores.
EX : usuário informou 21
O algoritmo imprime :
1
3
7
21
DICA: Você pode precisar usar a operação de módulo (a%b)
*/

// var i = 2;



// // var divisor = 2;

// // while(divisor <= num){
    
// //       if(num % divisor == 0){
// //         console.log(divisor =+ 2);
// //         i++;
// //         break;
// //       }
// // }

// while(num <= 100){
//     console.log(num);
//     num = num + 2;
    
// }


/*
10. Faça um algoritmo que receba um número e imprima todos seus divisores.
EX : usuário informou 21
O algoritmo imprime :
1
3
7
21
DICA: Você pode precisar usar a operação de módulo (a%b)
*/

var rs = require('readline-sync');

var num = rs.questionInt('Digite um número para saber seus divisores: ');

var i = 1;

while(i <= num){
      
        if(num % i == 0){
           console.log(i);
        }
        i++;
}