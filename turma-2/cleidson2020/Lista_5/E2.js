var rs = require('readline-sync');

let num1 = rs.questionInt('Digira seu número 1=  ');
let num2 = rs.questionInt('Digite seu número 2=  ');


for(var  i = num1; i <= num2; i++){
      

    console.log(i);


}

for(var i = num2; i <=num1; i++){
    console.log(i);
}