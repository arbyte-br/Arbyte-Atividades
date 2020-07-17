const nomeCarro = ({nome}) => ({
    nome:nome
})
const carro = {
    nome: 'Onix',
    valor: 20000.00
}
console.log(nomeCarro(carro))