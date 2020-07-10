//Peça o nome de 2 usuários;b.Para cada usuário, peça 1 número;
//c.Imprima na tela qual usuário digitou o maior número.
//d.Pare a execução.Neste exercício, cada usuário deve ser representado por um objeto. 
//O nome e o númerodo usuário devem ser propriedades deste objeto

let rs = require('readline-sync')
let usuarioUm = new Object()
usuarioUm.nome = rs.question('Usuario 1, digite seu nome, por favor: \n')
usuarioUm.valor = rs.questionInt(`${usuarioUm.nome} um valor usuario 1: \n`)


let usuarioDois = new Object()
    usuarioDois.nome = rs.question('Usuario 2, digite seu nome, por favor: \n')
    usuarioDois.valor = rs.questionInt(`${usuarioDois.nome} um numero usuario 2: \n`)

    if( usuarioUm.valor > usuarioDois.valor){
        console.log(`O valor digitado pelo ${usuarioUm.nome} é maior!`)
    }else{
        console.log(`O valor digitador pelo ${usuarioDois.nome} é maior!`)
    }