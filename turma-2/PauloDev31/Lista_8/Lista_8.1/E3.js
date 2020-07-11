//a.Peça o nome de 2 usuários;
//b.Peça a data de nascimento dos 2 usuários (formato DD/MM/AAAA);
//c.Com base nas datas de nascimento, calcule suas idades;
//d.Imprima na tela a idade de cada usuário;
//e.Imprima na tela qual é o usuário mais velho e qual o mais novo.f.Pare a execução
let rs = require('readline-sync')

let usuarioUm = new Object()
usuarioUm.nome = rs.question('Usuario 1, digite seu nome: \n')
usuarioUm.dataDeNascimento = rs.question(
    `${usuarioUm.nome} digite a sua data de nascimento no formato DD/MM/AAAA (ex: 24/12/1990): \n`
    )

let dataUsuario = usuarioUm.dataDeNascimento
let dataCalculo = dataUsuario.split('/')[2];
let anoAtual = new Date().getFullYear();

let idadeUsuarioUm = anoAtual - dataCalculo
    
let usuarioDois = new Object()
usuarioDois.nome = rs.question('Usuario 2, digite seu nome: \n')
usuarioDois.dataDeNascimento = rs.question(
    `${usuarioDois.nome} digite a sua data de nascimento no formato DD/MM/AAAA (ex: 24/12/1990): \n`
    )

let dataUsuarioDois = usuarioDois.dataDeNascimento
let dataCalculoDois = dataUsuarioDois.split('/')[2];
let anoAtualDois = new Date().getFullYear();

let idadeUsuarioDois = anoAtualDois - dataCalculoDois

if(idadeUsuarioUm > idadeUsuarioDois){
   console.log(`${usuarioUm.nome} é o mais vellho.`)
}else{
   console.log(`${usuarioDois.nome} é o mais velho.`)
}

    
