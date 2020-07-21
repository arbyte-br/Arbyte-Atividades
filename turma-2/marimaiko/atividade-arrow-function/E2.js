// A partir do objeto
// const carro = {nome: ‘carro’,valor: 100.00}
// Faça uma arrow function que faça um destruct no parâmetro desse objeto e imprima na tela apenas o nome do carro

const carro = {
    nome: "carro",
    valor: 100.00,
}

const resposta = (objCarro) => 
{
    const { nome } = objCarro;
    return nome;
}
console.log(resposta(carro));