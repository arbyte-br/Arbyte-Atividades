// 3. (OBRIGATÓRIO) Crie um programa que:
// a. Peça o nome de 2 usuários;
// b. Peça a data de nascimento dos 2 usuários (formato DD/MM/AAAA);
// c. Com base nas datas de nascimento, calcule suas idades;
// d. Imprima na tela a idade de cada usuário;
// e. Imprima na tela qual é o usuário mais velho e qual o mais novo.
// f. Pare a execução.
// Neste exercício, cada usuário deve ser representado por um objeto. O nome, a data de
// nascimento e a sua idade devem ser propriedades deste objeto.

let rs = require('readline-sync')

let x={}
x.nomeUsuario = rs.question('Qual o seu nome?\n')
x.dataDeNascimento = new Date(rs.question("Qual sua data de nascimento? \n")) .getFullYear();
x.dataAtual = new Date () .getFullYear();
x.idade = x.dataAtual - x.dataDeNascimento
let xResultado = x.idade


let y={}
y.nomeUsuario = rs.question('Qual o seu nome?\n').toUpperCase(0)
y.dataDeNascimento = new Date(rs.question("Qual sua data de nascimento? \n")) .getFullYear();
y.dataAtual = new Date () .getFullYear();
y.idade = y.dataAtual - y.dataDeNascimento
let yResultado = y.idade


if (xResultado < yResultado){
    console.log(`Usuário ${x['nomeUsuario']} é mais novo.`)
    console.log(`Usuário ${y['nomeUsuario']} é mais velho.`)
}
else if (yResultado < xResultado){
    console.log(`Usuário ${x['nomeUsuario']} é mais velho.`)
    console.log(`Usuário ${y['nomeUsuario']} é mais novo.`)
}
else{
    console.log(`Os usuários ${x['nomeUsuario']} e ${y['nomeUsuario']} tem a mesma idade`)
    
}