const carro = {
    nome: 'carro',
    valor: 100.00
}

const destCarro = nome => carro.nome;
const novoCarro = destCarro();

console.log(novoCarro);