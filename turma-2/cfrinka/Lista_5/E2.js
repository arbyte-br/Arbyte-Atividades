let rs = require('readline-sync');
let n1 = rs.questionInt('Insira um número: ');
let n2 = rs.questionInt('Insira um número: ');


    for (let i = n1; i <= n2; i++){
    console.log(i)      
}

for (let i = n2; i <= n1; i++){
    console.log(i)      
}
    
console.log('final da contagem')