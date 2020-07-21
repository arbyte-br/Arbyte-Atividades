//OBRIGATÓRIO) Faça uma função que recebe, por parâmetro, um valor N e calcula e
//escreve a tabuada de 1 até 9. Mostre a tabuada na forma:
//1 x N = N
//2 x N = 2N
//..
//9 x N = 9N


let rs=require('readline-sync');

let numero1=rs.question('Insira o numero da tabuada: ');

 let tabela= 0;

let multiplicador;
 function tabuada (numero1){
    console.log('Inicio de tabuada do ' +numero1+  '---------------------------');
      while (tabela <=9){
          var resultado = numero1*tabela;
          console.log(numero1 + "x" +tabela+ "="+(resultado));
          tabela++;
          }
        
    }

 console.log(tabuada(numero1));


 //a condição no caso
//condição ? 'ação para true' : 'ação para false'
