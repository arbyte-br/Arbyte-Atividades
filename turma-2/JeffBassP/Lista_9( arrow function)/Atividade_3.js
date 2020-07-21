const pessoa = {
    nome: 'Jeferson',
    dia: 28,
    mes: 10,
    ano: 1992,
};

const nomeIdade = () => {
    let dataAtual = new Date();
    let dataNasc = `${pessoa.mes}/${pessoa.dia}/${pessoa.ano}`;
    let convDataNasc = new Date(dataNasc);
    let ano = dataAtual.getFullYear() - convDataNasc.getFullYear();
    let mes = dataAtual.getMonth() - convDataNasc.getMonth();
    if (mes < 0 || dataAtual.getDate() < convDataNasc.getDate()) {
        ano -= 1;
    }
    return `${pessoa.nome}, ${ano} anos`;

}

console.log(nomeIdade(pessoa));