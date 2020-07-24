//A partir do objeto
//const carro = {
//nome: ‘carro’,
//valor: 100.00
//}
//Faça uma arrow function que faça um destruct no parâmetro desse objeto e imprima na
//tela apenas o nome do carro.

const carro = {
    nome: 'gol',
    valor: 100.00
}
const nomeDoCarro = ({nome}) => nome
console.log(`O nome do carro é ${nomeDoCarro(carro)}`)
