let rs = require('readline-sync');


let numUser = rs.questionInt('insira: ');

let cont = 0;
let acumI = numUser;
let acumP = 0;

while(cont < 4){
    let numUser = rs.questionInt('insira: ');

    if (numUser % 2 == 0){
        acumP += numUser       
        cont++
    }else{
        acumI *= numUser
        cont++
    }
}

console.log(`produtos do impares ${acumI}`);
console.log(`soma dos pares ${acumP}`);

