let readline = require('readline-sync');
let media = require ('./modele');


var notas= []
for (let x = 0; x < 4; x++){
 notas.push(readline.questionInt('Insira as notas: '))
}
console.log(notas)
 media.atividade5();

