/* Crie um programa que:
a. Peça o nome de 2 usuários;
b. Para cada usuário, peça 1 número;
c. Imprima na tela qual usuário digitou o maior número.
d. Pare a execução.
Neste exercício, cada usuário deve ser representado por um objeto. O nome e o número
do usuário devem ser propriedades deste objeto*/

let rs = require(`readline-sync`)
let primeiroUsuario = {}
let segundoUsuario = {}

primeiroUsuario.nome1 = rs.question(`Digite o nome do primeiro usuario: `)
primeiroUsuario.numero1 = rs.questionInt(`Digite um numero ${primeiroUsuario.nome1}: `)
console.clear()

segundoUsuario.nome2 = rs.question(`Digite o nome do segundo usuario: `)
segundoUsuario.numero2 = rs.questionInt(`Digite um numero ${segundoUsuario.nome2}: `)
console.clear()

if(primeiroUsuario.numero1 > segundoUsuario.numero2){
    console.log(`O maior numero foi o do ${primeiroUsuario.nome1}`)
}else if(segundoUsuario.numero2 > primeiroUsuario.numero1){
    console.log(`O maior numero foi o do ${segundoUsuario.nome2}`)
}else if (primeiroUsuario.numero1 == segundoUsuario.numero2){
    console.log(`Os numeros são iguais`)
}
