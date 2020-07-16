// 2.(OBRIGATÓRIO)
// Crieumprogramaque:
// a.Peça o nome de 1 usuário;
// b.Peça a sua data de nascimento no formato DD/MM/AAAA (ex: 24/12/1990);
// c.Com base na data de nascimento, calcule sua idade (a data de hoje você mesmo pode definir em uma variável);
// d.Imprima na tela a idade do usuário.e.Pare a execução

let rs = require ('readline-sync')

let usuario = {
    nome: rs.question('Digite seu nome:\n'),
    dataNasc: rs.question ('Digite sua data de nascimento! ex: DD/MM/AAAA:\n'),
    idade: '0',
}

let diaUsuario = parseInt(usuario.dataNasc[0])
let mesUsuario = parseInt(usuario.dataNasc[1])
let anoUsuario = parseInt(usuario.dataNasc[2])

let diaAtual = 09
let mesAtual = 07
let anoAtual = 2020

let idadeUSuario = (anoAtual - anoUsuario)
    if ((mesAtual === mesUsuario && diaAtual < diaUsuario) || (mesAtual < mesUsuario)) {
        idadeUSuario = idadeUSuario -1
    }

console.log('A idade de'+ usuario.nome + 'é' + idadeUSuario)
