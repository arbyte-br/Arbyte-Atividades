const veiculo = {
    nome: 'Monza',
    valor: 100.00
}

const carro = ({nome}) => nome;

console.log(carro(veiculo));