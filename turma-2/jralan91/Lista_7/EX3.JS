//(OBRIGATÓRIO) Faça uma função que recebe a idade de uma pessoa em anos,
//meses e dias e retorna essa idade expressa em dias.
//Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado
//utilizando a função criada.


let rs=require('readline-sync');
let ra=require('readline-sync');
let rt=require('readline-sync');
let rb=require('readline-sync');

let idade=rb.question('Informe sua idade : ');
let dia=rs.question('Informe seu  dia de nascimento : ');
let mes=ra.question('Informe seu  mes de nascimento :  ');
let ano=rt.question('Informe seu  ano de nascimento :  ');

 let diasdevida;
  datadenascimento =[dia,mes,ano];
 
     function dias (){
        diasdevida = idade *365;
         //datadenascimento = dia+mes+ano;
        return diasdevida; 

  }
console.log('Seus dias de vidas são: '+ dias(diasdevida)+" dias");
console.log('Nascimento: '+[dia]+'/'+[mes]+'/'+[ano]);
