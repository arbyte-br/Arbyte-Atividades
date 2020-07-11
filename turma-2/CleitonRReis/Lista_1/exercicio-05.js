var rs = require('readline-sync')

var n1;
var n2;
var n3;

var n1 = rs.questionInt('Insira o primeiro número: ');
var n2 = rs.questionInt('Insira o segundo número: ');
var n3 = rs.questionInt('Insira o terceiro número: ');

if(n1 > n2 && n2 > n3){
    console.log(n3, n2, n1);
}else if(n1 > n3 && n3 > n2){
    console.log(n3, n2, n1);
}else if(n3 > n1 && n1 > n2){
    console.log(n2, n1, n3);
}else if(n3 > n2 && n2 > n1){
    console.log(n1, n2, n3);
}else if(n1 == n3 && n2 > n1){
    console.log(n1, n3, n2);
}else if(n1 == n2 && n3 > n2){
    console.log(n1, n2, n3);
}else if(n2 == n3 && n2 > n1){
    console.log(n1, n3, n2);
}else if(n1 == n2 && n2 > n3){
    console.log(n3, n2, n1);
}else{
    console.log(n1, n2, n3)   
}