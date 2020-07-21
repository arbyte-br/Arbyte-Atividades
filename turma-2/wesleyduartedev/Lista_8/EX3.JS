//(OBRIGATÓRIO) Faça um programa que lê o arquivo carro.json utilizando a biblioteca e
//‘fs’ para ler o arquivo e após isso utilize o método JSON.parse para deserializar o objeto
//em string.
//Após isso imprima os valores lidos do json do arquivo.
//OBS: altere o arquivo salve e rode o programa novamente e veja os dados sendo
//mudados a cada execução.

    let fs = require("fs");
    let rs = require("readline-sync");
  
  

   let carroJsonCaminho = 'carro.json';
   let bufferCarro = fs.readFileSync(carroJsonCaminho);
   let novoCarro = JSON.parse(bufferCarro);
   let marca = rs.question('Insira a marca do novo carro: ');
   let cor = rs. question('Insira a cor do novo carro: ');
   let modelo = rs. question('Insira o modelo do novo carro: ');

    //novoCarro.push(bufferCarro);
  
 

   novoCarro = {
    mercaCarro: marca,
    corCarro: cor,
    modeloCarro: modelo,

    
 };  

   let carroString = JSON.stringify(novoCarro);
   fs.writeFileSync(carroJsonCaminho,novoCarro);
  
  console.log(carroString,novoCarro);
  //console.log(bufferCarro);

 
