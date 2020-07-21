// Desenvolva um programa que pergunte ao usuário se ele deseja
// CADASTRAR, LISTAR ou SAIR;

// Caso a opção seja CADASTRAR, o programa deve chamar uma arrow function
// apresentando as opções de cadastro de pessoa com os seguintes atributos: NOME,
// DATA DE NASCIMENTO (DD-MM-AAAA), calcule a idade da pessoa e verifique se a
// pessoa é maior ou menor de idade e salve esses dados em uma lista JSON;

// Caso a opção seja LISTAR, o programa deve chamar uma arrow function que liste os
// dados cadastrados no JSON apresentando o NOME, DATA DE NASCIMENTO, IDADE
// e se é MAIOR ou MENOR DE IDADE;

// Caso a opção seja SAIR, o programa deve ser encerrado

const fs = require('fs')
const ageCalculator = require('age-calculator');
const { AgeFromDateString, AgeFromDate } = require('age-calculator');
const rs = require('readline-sync');
let opcao = rs.questionInt('Digite uma opcao:   1-Cadastrar   2-Listar    3-Sair: ');

const cadastrar = () =>
({
    nome : rs.question('Digite seu nome: '),
    dia : rs.questionInt('Digite o dia do seu nascimento: '),
    mes : rs.questionInt('Digite o mes do seu nascimento: '),
    ano : rs.questionInt('Digite o ano do seu nascimento: '),
    maioridade: false
});

const calcularIdade = (nome, dia, mes, ano) => 
{
    let ageFromDate = new AgeFromDate(new Date(ano, mes, dia)).age;
    return ageFromDate;
}

switch (opcao) {
    case 1:
        let cadastro = cadastrar();
        cadastro.maioridade = calcularIdade(cadastro.nome, cadastro.dia, cadastro.mes, cadastro.ano) >= 18;

        console.log(cadastro); 

        let caminhoArquivo = 'lista.json';
        let convertToJson = JSON.stringify(cadastro);
        fs.writeFileSync(caminhoArquivo, convertToJson);

        break;

    case 2:
        let arquivoJson =fs.readFileSync('lista.json');
        
        let lerCadastro=JSON.parse(arquivoJson);
        
        console.log(lerCadastro);
        break;

    default:
        break;
}