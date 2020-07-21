let rs = require ('readline-sync');

let num = rs.questionInt('Digite o primeiro numero de 1 a 100 ');
let num2 = rs.questionInt('Digite o segundo numero de 1 a 100 ');

let cont = num;
while (cont <= num2)
{
    if((cont%7) ==0 ){
        console.log("PING")
    }
    if((cont%5) == 0){
        console.log("PONG")
    }
    if((cont%7) == 0 && (cont%5) == 0 )
    {
        console.log('PING PONG')
    }
    else console.log(cont)
    cont ++;
   
}