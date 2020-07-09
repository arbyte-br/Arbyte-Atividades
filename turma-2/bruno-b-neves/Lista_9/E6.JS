let rs = require('readline-sync');
const chalk = require('chalk');
const log = console.log;

var marca = rs.question(chalk.blue('Insira a marca do carro: \n'));
var cor = rs.question(chalk.red('Insira a cor do carro: \n'));
var modelo = rs.question(chalk.cyanBright('Insira o modelo do carro: \n'));

cadCarro(marca, cor, modelo);

function cadCarro(marca, cor, modelo ){
  var carro = {
    marcaCarro: marca,
    corCarro: cor,
    modeloCarro: modelo,
  };
  console.log(`A marca do carro é: ${carro.marcaCarro}`);
  console.log(`A cor do carro é: ${carro.corCarro}`);
  console.log(`O modelo do carro é: ${carro.modeloCarro}`);
  log(chalk.red(carro.marcaCarro));
  log(chalk.green(carro.corCarro));
  log(chalk.yellow(carro.modeloCarro));
}