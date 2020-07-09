const rs = require('readline-sync');
const median = require('median');

let firstNote = rs.question('Insira a primeira nota: ');
let secondNote = rs.question('Insira segunda nota: ');
let thirdNote = rs.question('Insira a terceira nota: ');
let fourthNote = rs.question('Insira a quarta nota: ');

let note = [firstNote, secondNote, thirdNote, fourthNote];

let value = median(note);

console.log('A media é de: ' + value);