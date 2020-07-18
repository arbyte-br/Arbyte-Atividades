/*
5. Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo usuário,
usando o comando For.. Perguntar ao usuário se ele deseja calcular o fatorial de
outro número e repetir a execução do programa tantas vezes quantas o usuário indicar.
Exemplo de tela de saída:
*/

//Variável quando declarada dentro do looping sempre vai sobreescrever.

const rs = require('readline-sync');

let numeroFatorial = rs.questionInt(`\nInsira um número para saber o fatorial dele: `); 

console.log(`\nO fatorial de ${numeroFatorial} é: \n`);

let fatorial = 1;

while (numeroFatorial != 1) {
    //let fatorial = 1;
    for (let j = 1; j <= numeroFatorial; j++) {
        fatorial = j * fatorial;
        console.log(fatorial);
        

    }
    
    let novoFatorial = rs.questionInt('\nDeseja calcular o fatorial de outro número? 0 = Sim / 1 = Não: ');
    
    if (novoFatorial != 1) {
        numeroFatorial = rs.questionInt('\nInsira outro número para saber o fatorial dele: ');
        
        fatorial = 1;
        
        console.log(`\nO fatorial de ${numeroFatorial} é: \n`);
        
        
    } else {
        console.log('\nSem problemas! Obrigado, até mais!\n')
        break;
    }
}