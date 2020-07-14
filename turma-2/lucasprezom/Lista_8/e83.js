// 3.(OBRIGATÓRIO)
// Crieumprogramaque:
// a.Peça o nome de 2 usuários;
// b.Peça a data de nascimento dos 2 usuários (formato DD/MM/AAAA);
// c.Com base nas datas de nascimento, calcule suas idades;
// d.Imprima na tela a idade de cada usuário;
// e.Imprima na tela qual é o usuário mais velho e qual o mais novo.
// f.Pare a execução.

let rs = require ('readline-sync')

let usuario1 = {
    nome: rs.question('Digite seu nome:\n'),
    dataNasc: rs.question ('Digite sua data de nascimento! ex: DD/MM/AAAA:\n'),
    idade: '0',
}

let usuario2 = {
    nome2: rs.question('Digite seu nome:\n'),
    dataNasc2: rs.question ('Digite sua data de nascimento! ex: DD/MM/AAAA:\n'),
    idade2: '0',
}

let diaUsuario1 = parseInt(usuario1.dataNasc[0])
let mesUsuario1 = parseInt(usuario1.dataNasc[1])
let anoUsuario1 = parseInt(usuario1.dataNasc[2])

let diaUsuario2 = parseInt(usuario2.dataNasc2[0])
let mesUsuario2 = parseInt(usuario2.dataNasc2[1])
let anoUsuario2 = parseInt(usuario2.dataNasc2[2])

let diaAtual = 09
let mesAtual = 07
let anoAtual = 2020

let idadeUSuario1 = (anoAtual - anoUsuario1)
    if ((mesAtual === mesUsuario1 && diaAtual < diaUsuario1) || (mesAtual < mesUsuario1)) {
        idadeUSuario1 = idadeUSuario1 -1
    } 

console.log('A idade de'+ usuario1.nome + 'é' + idadeUSuario1)

