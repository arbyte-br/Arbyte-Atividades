let rs = require('readline-sync');
 var idade1, idade2, idade3;

 idade1 =("Informe a primeira idade: ")
 idade1 =(idade1)
 
 idade2 =("Informe a segunda idade: ")
 idade2 =(idade2)
 
 idade3 =("Informe a terceira idade: ")
 idade3 = (idade3)
 var idade = [];
for (var i = 0; i < 3; i++) idade[i] = prompt("Informe a primeira idade: ");
idade.sort();
for (var i = 0; i < 3; i++) console.log(idade[i]);