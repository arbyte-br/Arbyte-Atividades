const rs = require('readline-sync');
const fs = require('fs');

const userJson = 'usuarios.json';
let bufferUser = fs.readFileSync(userJson);
let newUser = JSON.parse(bufferUser);


function calcIdade(nascimento) {
    let dataNasc = new Date(nascimento);
    let dataAtual = new Date();
    ano = dataAtual.getFullYear() - dataNasc.getFullYear();
    let mes = dataAtual.getMonth() - dataNasc.getMonth();
    if (mes < 0 || dataAtual.getDate() < dataNasc.getDate()) {
        ano -= 1;
    };
    return ano;
}

let podeVotar = (idade) => {
    let PV;
    if (idade < 18) {
        pv = false;
    } else {
        pv = true;
    }
    return pv;
}

let command = rs.questionInt('Olá, você deseja 1) CADASTRAR, 2) LISTAR, 3) SAIR: ');

    if (command == 1) {
        console.log('CADASTRAR');

        function cadUser() {
            let user = {};
            user.nome = rs.question('Digite o nome: ');
            user.dataNasc = rs.question('Digite a data de nascimento: ');
            user.idade = calcIdade(user.dataNasc);
            user.pVotar = podeVotar(user.idade);
            return user;
        }
        newUser.push(cadUser());
        let userString = JSON.stringify(newUser);
        fs.writeFileSync(userJson, userString);
    } else if (command == 2) {
        console.log('LISTAR');
        let newUser = JSON.parse(bufferUser);
        console.log(newUser);


    } else if (command == 3) {
        console.log('SAIR');
    }

