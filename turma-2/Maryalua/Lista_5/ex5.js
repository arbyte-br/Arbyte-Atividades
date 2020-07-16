//Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo
//usuário, usando o comando For.. Perguntar ao usuário se ele deseja calcular o fatorial
//de outro número e repetir a execução do programa tantas vezes quantas o usuário indicar.


let rs = require('readline-sync');
let n = rs.questionInt('insira um número e descubra seu fatorial:')

while (n > 0) {

    for (let i = n - 1; i > 0; i--) {
        n = n * i
    } console.log(n)
 n=rs.questionInt('deseja calcular o fatorial de outro número? se sim, digite o númeoro, caso contrário digite 0')
}
console.log('encerrado');