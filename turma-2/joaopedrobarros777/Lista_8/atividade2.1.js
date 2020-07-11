var readline = require('readline-sync');
var DateDiff = require('date-diff');

var nascimento = new Date(1992, 12, 13);
var hoje = new Date(2020, 7, 9);

var diff = new DateDiff(hoje, nascimento);

console.log("Idade: " + diff.years());