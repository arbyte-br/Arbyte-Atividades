//(OBRIGATÓRIO) Adicione no programa anterior, após a impressão dos dados, a
//funcionalidade de salvar o objeto carro em formato JSON.
//Utilize o JSON.stringify para transformar o objeto em string e após isso utilize os
//métodos da biblioteca ‘fs’ para salvar o arquivo.
//Salve o json como ‘carro.json’

    let fs = require("fs");
    let rs = require("readline-sync");
  
 let marca = rs.question('Insira a marca do carro: ');
 let cor = rs. question('Insira a cor do carro: ');
 let modelo = rs. question('Insira o modelo do carro: ');

 let carro = {
     mercaCarro: marca,
     corCarro: cor,
     modeloCarro: modelo,

 };

  let carroJsonCaminho = 'carro.json';
  let carroString = JSON.stringify(carro);
  fs.writeFileSync(carroJsonCaminho,carroString);


   

  console.log(carroString);
 //console.log(`A marca é: ${carro.mercaCarro}`);
 //console.log(`A cor do carro é: ${carro.corCarro}`);
 //console.log(`O modelo do carro é: ${carro.modeloCarro}`);