//Crie um programa que:a.Peça o nome de 2 usuários; 
//b.Para cada usuário, peça 1 número; 
//c.Imprima na tela qual usuário digitou o maior número.
//d.Pare a execução.Neste exercício, cada usuário deve ser representado por um objeto. 
//O nome e o número do usuário devem ser propriedades deste objeto.

let rs = require('readline-sync')

let usuario1 = {
    nome1: rs.question('Usuário 1, digite seu nome: \n'),
    numero1: rs.questionInt('Digite um número: \n'),
}

let usuario2 = {
    nome2: rs.question('Usuário 2, digite seu nome: \n'),
    numero2: rs.questionInt('Digite um número: \n')
}

console.log(usuario1)
console.log(usuario2)

if (usuario1.numero1 > usuario2.numero2) {
    console.log(usuario1.nome1 + ' digitou o maior número.')

} else {
    console.log(usuario2.nome2 + ' digitou o maior número.')
}


