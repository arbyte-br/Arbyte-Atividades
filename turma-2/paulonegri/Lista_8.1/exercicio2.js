/*Crie um programa que:
a. Peça o nome de 1 usuário;
b. Peça a sua data de nascimento no formato DD/MM/AAAA (ex: 24/12/1990);
c. Com base na data de nascimento, calcule sua idade (a data de hoje você
mesmo pode definir em uma variável);
d. Imprima na tela a idade do usuário.
e. Pare a execução.
Neste exercício, o usuário deve ser representado por um objeto. O nome, a data de
nascimento e a sua idade devem ser propriedades deste objeto..*/

let rs = require(`readline-sync`)
let usuario = {}

usuario.nome = rs.question(`Informe seu nome: `)
usuario.dataNascimento = rs.question(`Informe sua data de nascimento(DD/MM/AAAA): `)
usuario.diaNascimento = parseInt(usuario.dataNascimento.slice(0,2))
usuario.mesNascimento = parseInt(usuario.dataNascimento.slice(3,5))
usuario.anoNascimento = parseInt(usuario.dataNascimento.slice(6,10))
usuario.idade 

let dia = rs.questionInt(`Informe em que dia estamos: `)
let mes = rs.questionInt(`Informe em que mes estamos: `)
let ano = rs.questionInt(`Informe em que ano estamos: `)
let idade = 0

for(i = usuario.anoNascimento +1; i <= ano; i++){
    if(ano == i){
        if(mes > usuario.mesNascimento){
            idade++
        }else if(mes == usuario.mesNascimento){
            if(dia >= usuario.diaNascimento){
                idade++
            }
        }
    }else{
        idade++
    }  
}
console.clear()
usuario.idade = idade
console.log(`${usuario.nome} você tem ${usuario.idade} anos.`)

