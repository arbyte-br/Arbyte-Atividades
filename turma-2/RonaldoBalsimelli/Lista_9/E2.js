/* 2. (OBRIGATÓRIO) Faça um algoritmo que receba peso e altura do usuário e calcule o
IMC.
Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc 

const imc = new FasamImc(80, 1.80); // peso, altura
 
imc.calc();
// 24.69

*/

let rs = require ('readline-sync')
let FasamImc = require('fasam-imc-calc')
let chalk = require('chalk')


let peso = rs.questionInt (chalk.cyanBright.bold (`Por favor insira seu peso:  \n`))
let altura = rs.questionFloat (chalk.cyanBright.bold ('Por favor insira sua altura: \n'))

let imc = new FasamImc (peso,altura)

    console.log (chalk.yellowBright.bold("Seu Imc é " + imc.calc()))

    


