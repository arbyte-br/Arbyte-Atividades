const rs = require('readline-sync');
const fs = require('fs');


let questionOne = rs.question('Cadastrar || Listar || Sair : ');

if(questionOne == 'CADASTRAR' || questionOne == 'Cadastrar' || questionOne == 'cadastrar') {
const cadastro = () => { 
        let user = {};
        user.name = rs.question('Full Name: '.toUpperCase());
        user.day = rs.questionInt('Day: '.toUpperCase());
        user.month = rs.questionInt('Month: '.toUpperCase());
        user.year = rs.questionInt('Year : '.toUpperCase());
        
        if(user.year <= '2002') {
            user.message = `É maior de idade ${user.day}/${user.month}/${user.year}`;
        } else if (user.year >= '2003') {
            user.message = `É menor de idade ${user.day}/${user.month}/${user.year}`;
        } else {
            console.log('Erro');
        }
        
        let dados = JSON.stringify(user);
        let caminhoDados = './cadastro.json';
        
        fs.writeFileSync(caminhoDados, dados);
        
        return user;
        
    }
    cadastro();
    
} else if (questionOne == 'LISTAR' || questionOne == 'Listar' || questionOne == 'listar') {
    const lista = () => {
        let cadastroJson = fs.readFileSync('./cadastro.json')
        let cadastro = JSON.parse(cadastroJson);
        
        return cadastro
    }
    console.log(lista());
} else if (questionOne == 'SAIR' || questionOne == 'Sair' || questionOne == 'sair' ) {
    process.exit()
}

//console.log(cadastro());

