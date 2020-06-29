/*  (OBRIGATÓRIO)​Faça um programa que lê o arquivo carro.json utilizando a biblioteca e ‘fs’
 para ler o arquivo e após isso utilize o método JSON.parse para deserializar o objeto em string.
   Após isso imprima os valores lidos do json do arquivo.
    OBS: altere o arquivo salve e rode o programa novamente e veja os dados sendo mudados a cada execução. 
*/

// Variável onde chamamos o 'file-system'.
var fs = require('fs')

// Variável onde peço para o 'file-system' ler o arquivo 'carros.json' com a função 'fs.readFileSync' e passando o local do arquivo como parâmetro.
var carroSerializado = fs.readFileSync('./data/carros.json')
// Variável onde utilizo o método 'JSON.parse' e passo a variável 'carroSerializado' como parâmetro. o 'JSON.parse' Desserializa o parâmetro informado.
var carroDesserializado = JSON.parse(carroSerializado)
// Por fim basta imprimir a variável 'carroDesserilizado'.
console.log(carroDesserializado)
