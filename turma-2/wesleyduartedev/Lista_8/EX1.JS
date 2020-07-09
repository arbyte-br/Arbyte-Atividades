//(OBRIGATÓRIO) Crie um programa que receba 3 entradas do usuário. A cor, o modelo
//e a marca, crie um objeto Carro e atribua as entradas do usuário neste objeto.
//No final o programa deve imprimir as informações do carro.
//Utilize a criação de objetos para resolver este problema


 let rs = require("readline-sync");
  
 let marca = rs.question('Insira a marca do carro: ');
 let cor = rs. question('Insira a cor do carro: )');
 let modelo = rs. question('Insira o modelo do carro: )');

 let carro = {
     mercaCarro: marca,
     corCarro: cor,
     modeloCarro: modelo,

 };

 console.log(`A marca é: ${carro.mercaCarro}`);
 console.log(`A cor do carro é: ${carro.corCarro}`);
 console.log(`O modelo do carro é: ${carro.modeloCarro}`);

 
