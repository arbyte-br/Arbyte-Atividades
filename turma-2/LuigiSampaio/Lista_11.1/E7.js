const readline = require("readline-sync");
const fs = require("fs");

const dadoJsonCaminho = "user.json";
const bufferDado = fs.readFileSync(dadoJsonCaminho);
const newDado = JSON.parse(bufferDado);
newDado.push(criarDado());

let listaDados = [];
const opcoes = ["Menu", "Cadastrar", "Listar", "Sair"];
let menu = 0;
while (menu == 0) {
    let menu = readline.keyInSelect(opcoes, "O que voce deseja? ");
    while (menu == 1) {
        listaDados.push(criarDado());
        menu = 0;
    }
    while (menu == 2) {
        console.log(listarDados());
        menu = 0;
    }
}

function criarDado() {
    let pessoa = {};
    pessoa.nome = readline.question("Informe o nome: ");
    pessoa.anoNasc = readline.question("Informe o ano de nasciemnto (YYYY): ");
    pessoa.mesNasc = readline.question("Informe o mes de nasciemnto (MM): ");
    pessoa.diaNasc = readline.question("Informe o dia de nasciemnto (DD): ");
    pessoa.idade = calculaIdade(pessoa.anoNasc, pessoa.mesNasc, pessoa.diaNasc);

    console.log("Idade: " + pessoa.idade);

    if (pessoa.idade >= 18) {
        pessoa.maioridade = "Maior de idade";
    } else {
        pessoa.maioridade = "Menor de idade";
    }

    gravar();
    return pessoa;
}

function calculaIdade(ano, mes, dia) {
    let anoAtual = new Date().getFullYear();
    let mesAtual = new Date().getMonth() + 1;
    let diaAtual = new Date().getDate();
    let idade = anoAtual - ano;

    if (mesAtual < mes) {
        idade--;
    } else {
        if (diaAtual < dia) {
            idade--;
        }
    }
    return idade;
}

function listarDados() {
    const buffer = fs.readFileSync(dadoJsonCaminho);
    const jsonData = JSON.parse(buffer);
    return jsonData;
}

function gravar() {
    const oldResult = listarDados();
    const dadosSerializados = JSON.stringify([...oldResult, ...newDado]);
    fs.writeFileSync(dadoJsonCaminho, dadosSerializados);
}