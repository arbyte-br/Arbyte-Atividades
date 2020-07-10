//a.Peça o nome de 1 usuário;
//b.Peça a sua data de nascimento no formato DD/MM/AAAA (ex: 24/12/1990);
//c.Com base na data de nascimento, calcule sua idade (a data de hoje vocêmesmo pode definir em uma variável);
//d.Imprima na tela a idade do usuário.e.Pare a execução

let rs = require('readline-sync')

let usuario = new Object()
usuario.nome = rs.question('Digite seu nome: \n')
usuario.dataDeNascimento = rs.question(
    `${usuario.nome} digite a sua data de nascimento no formato DD/MM/AAAA (ex: 24/12/1990): \n`
    )

let dataUsuario = usuario.dataDeNascimento
let dataCalculo = dataUsuario.split('/')[2];
let anoAtual = new Date().getFullYear();

let idade = anoAtual - dataCalculo
    console.log(`Sua idade é ${idade}`)
