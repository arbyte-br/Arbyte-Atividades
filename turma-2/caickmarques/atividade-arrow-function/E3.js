const nomePessoa = 'Joao';
const diaNasc = 17;
const mesNasc = 08;
const anoNasc = 1981;

const calculaIdade = (nome, dia, mes, ano) => {
    let idade = new Date().getFullYear() - ano;
    const CalculoMes = new Date().getMonth() - mes;
    if (CalculoMes < 0 || (CalculoMes === 0 && hoje.getDate() < dataNasc.getDate())){
        idade = idade - 1;
    }
    return console.log(`${nome} nasceu em ${dia}/${mes}/${ano} e com isso tem ${idade} anos`);
}

calculaIdade(nomePessoa, diaNasc, mesNasc, anoNasc);

