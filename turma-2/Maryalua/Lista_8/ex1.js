//Crie um programa que receba 3 entradas do usuário. A cor, o modelo
//e a marca, crie um objeto Carro e atribua as entradas do usuário neste objeto.
//No final o programa deve imprimir as informações do carro.
//Utilize a criação de objetos para resolver este problema


let rs = require('readline-sync');
let marca = rs.question('qual a marca do carro? ');
let cor = rs.question('Qual a cor do carro? ');
let modelo = rs.question('Qual o modelo? ');
let obj = {
    marcaCarro: marca,
    corCarro: cor,
    modeloCarro: modelo
};
console.log(`A marca é : ${obj.marcaCarro}`)
console.log(`A cor do carro é : ${obj.corCarro}`);
console.log(`O modelo é: ${obj['modeloCarro']}`);