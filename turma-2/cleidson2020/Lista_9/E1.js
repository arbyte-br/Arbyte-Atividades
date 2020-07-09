let median = require('median');
let rs = require('readline-sync')

var arr = [];
let value;

let interacao1 = {

    media1: rs.questionInt("Nota 1 \n >>     "),
    media2: rs.questionInt("Nota 2 \n >>     "),
    media3: rs.questionInt("Nota 3 \n >>     "),
    media4: rs.questionInt("Nota 4 \n >>     "),

};

arr.push(interacao1.media1);
arr.push(interacao1.media2);
arr.push(interacao1.media3);
arr.push(interacao1.media4);

value = median(arr);
console.log(value);



/* console.log(arr);
console.log(interacao1);
 */


/* var arr = [];
var mede = median(arr);
result ='';

let pergunta1 = rs.questionInt('Insira Valor 1');
let pergunta2 = rs.questionInt('Insira Valor 2');
let pergunta3= rs.questionInt('Insira Valor 3');
let pergunta4= rs.questionInt('Insira Valor 4');

function interacao(pergunta1,pergunta2,pergunta3,pergunta4){

    arr.push(interacao)

};

console.log (interacao)
 */
