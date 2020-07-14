// 1.(OBRIGATÓRIO) 
// Crieumprogramaque:
// a.Peça o nome de 2 usuários;
// b.Para cada usuário, peça 1 número;
// c.Imprima na tela qual usuário digitou o maior número.
// d.Pare a execução.Neste exercício, cada usuário deve ser representado por um objeto.
//  O nome e o númerodo usuário devem ser propriedades deste objeto.

 let rs = require ('readline-sync')

 let nome1 = rs.question('Nome do usuario 1:\n')
 let nome2 = rs.question('Nome do usuario 2:\n')
 let numero1 = rs.question('Usuario 1 escolha um número:\n')
 let numero2 = rs.question('Usuario 2 escolha um número:\n')

let usuario1 = {nome1, numero1}
let usuario2 = {nome2, numero2}

if (numero1 > numero2) {
    console.log (`O ${nome1} tem o maior número`)
} else {
    console.log (`O ${nome2} tem o número maior`)
}
