/*
8.Faça um programa que pergunte ao usuário se ele quer adicionar ou apenas exibir,
caso o usuário escolha adicionar, altere o programa inicial de cadastro de carro para que
não salve 1 objeto carro e sim uma coleção de carros (utilizando arrays, em vez deserializar/
deserializar o objeto será o array que possui os carros). Após cadastrar o carro o programa deve novamente 
solicitar o usuário se quer exibir ou adicionar, caso o usuário escolha exibir deve ser exibido todos os carros cadastrados.
*/

const rs = require('readline-sync');

let dadosDeVeiculos = [];

let garagem = {
    dadosDeVeiculos 
};

let continuarCadastrandoCarros = rs.question('Deseja cadastrar carros? S = sim / N = não: ');

let i = 0;

while (continuarCadastrandoCarros != 'N') {
    
    let marca = rs.question('Informe a marca do seu carro: ');
    let modelo = rs.question('Informe o modelo do seu carro: ');
    let cor = rs.question('Informe a cor do seu carro: ');
    let valor = rs.question('Informe o valor do seu carro: ');
    
    dadosDeVeiculos.push(marca, modelo, cor, valor);

    continuarCadastrandoCarros = rs.question('Deseja continuar cadastrando carros? S = sim / N = não: ');

    if (continuarCadastrandoCarros == 'N') {
        console.log(garagem);
    }
    i++;
}