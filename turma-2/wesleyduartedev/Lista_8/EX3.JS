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
 //let marca = rs.question('Insira a marca do carro: ');
 //let cor = rs. question('Insira a cor do carro: ');
 //let modelo = rs. question('Insira o modelo do carro: ');
 

 let carro = {
     //mercaCarro: marca,
     //corCarro: cor,
    // modeloCarro: modelo,
    marca: rs.question('Marca do carro: '),
    cor: rs.question('Cor do carro: '),
    modelo: rs.question('Modelo do carro: '),


 };  
    novoCarro.push(carro);
  


  let carroString = JSON.stringify(novoCarro);
  fs.writeFileSync(carroJsonCaminho,carroString);
  
  console.log(carroString);


