var rs = require('readline-sync');

var num = rs.questionFloat('Digite o nº 100 para saber os valores pares de 0 até ele: ');
var resultado = 0;

while(num){
      
if(resultado <= num){
      console.log(resultado);
      resultado = resultado + 2;
}else{
      break;
}
}