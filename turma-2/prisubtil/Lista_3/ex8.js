/* Faça um programa que pergunte ao usuário escolher duas opções A e B.  
A encerra o programa, B é pra fazer uma soma. 
a. Se o usuário inserir A o programa fecha
b. Se o usuário inserir B o programa vai realizar uma operação de soma, solicitando dois números 
inteiros (n1 e n2) onde após o usuário inserir o segundo número o algoritmo deve apresentar 
a soma e também pergunta se quer realizar outro cálculo. c. Se o usuário inserir qualquer 
coisa diferente de A ou B o programa deve dizer que não entendeu o comando e solicitar novamente
para inserir A ou B*/

let readlineSync = require('readline-sync');
let opcao = readlineSync.question('Digite A ou B: ');
switch(opcao){
    case 'A':
        break;
    case 'B':
        let numero1 = readlineSync.questionInt('Digite o primeiro numero: ');
        let numero2 = readlineSync.questionInt('Digite o segundo numero: ');
        console.log(`a soma entre ${numero1} e ${numero2} é ${numero1+numero2}`);
            let outroCalculo = readlineSync.question('Gostaria de realizar outro cálculo? ');
            while(outroCalculo == 'sim'){
                let numero1 = readlineSync.questionInt('Digite o primeiro numero: ');
                let numero2 = readlineSync.questionInt('Digite o segundo numero: ');
                console.log(`a soma entre ${numero1} e ${numero2} é ${numero1+numero2}`);
                
            }
    default:
        console.log('Opcão inválida, insira A ou B');

}