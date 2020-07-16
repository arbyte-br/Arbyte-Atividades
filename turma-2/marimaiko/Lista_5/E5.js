let rs = require('readline-sync');



for (let opcao = 1; opcao == 1; opcao++) {
    let n = rs.questionInt('Insira um numero: ');
    let x = n;
    let result = 1;
    for (let i = 0; i < x; i++) {
        result = result * (n - i);
    }
    console.log('Fatorial=' + result);
    console.log('Você quer executar de novo? Se sim, digite 0')
    opcao = rs.questionInt('Insira opcao: ');
}
