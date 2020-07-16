/*Crie um programa que:
a. Peça o nome de 2 usuários;
b. Peça a data de nascimento dos 2 usuários (formato DD/MM/AAAA);
c. Com base nas datas de nascimento, calcule suas idades;
d. Imprima na tela a idade de cada usuário;
e. Imprima na tela qual é o usuário mais velho e qual o mais novo.
f. Pare a execução.
Neste exercício, cada usuário deve ser representado por um objeto. O nome, a data de
nascimento e a sua idade devem ser propriedades deste objeto*/

let rs = require(`readline-sync`)
let primeiroUsuario = {}
primeiroUsuario.nome = rs.question(`Informe seu nome: `)
primeiroUsuario.dataNascimento = rs.question(`Informe sua data de nascimento(DD/MM/AAAA): `)
primeiroUsuario.diaNascimento = parseInt(primeiroUsuario.dataNascimento.slice(0,2))
primeiroUsuario.mesNascimento = parseInt(primeiroUsuario.dataNascimento.slice(3,5))
primeiroUsuario.anoNascimento = parseInt(primeiroUsuario.dataNascimento.slice(6,10))
primeiroUsuario.idade

let segundoUsuario = {}
segundoUsuario.nome = rs.question(`Informe seu nome: `)
segundoUsuario.dataNascimento = rs.question(`Informe sua data de nascimento(DD/MM/AAAA): `)
segundoUsuario.diaNascimento = parseInt(segundoUsuario.dataNascimento.slice(0,2))
segundoUsuario.mesNascimento = parseInt(segundoUsuario.dataNascimento.slice(3,5))
segundoUsuario.anoNascimento = parseInt(segundoUsuario.dataNascimento.slice(6,10))
segundoUsuario.idade

let dia = rs.questionInt(`Informe em que dia estamos: `)
let mes = rs.questionInt(`Informe em que mes estamos: `)
let ano = rs.questionInt(`Informe em que ano estamos: `)
idade1 = 0
idade2 = 0
console.clear()
for(i = primeiroUsuario.anoNascimento +1; i <= ano; i++){
    if(ano == i){
        if(mes > primeiroUsuario.mesNascimento){
            idade1++
        }else if(mes == primeiroUsuario.mesNascimento){
            if(dia >= primeiroUsuario.diaNascimento){
                idade1++
            }
        }
    }else{
        idade1++
    }  
}
for(i = segundoUsuario.anoNascimento +1; i <= ano; i++){
    if(ano == i){
        if(mes > segundoUsuario.mesNascimento){
            idade2++
        }else if(mes == segundoUsuario.mesNascimento){
            if(dia >= segundoUsuario.diaNascimento){
                idade2++
            }
        }
    }else{
        idade2++
    }  
}
primeiroUsuario.idade = idade1
segundoUsuario.idade = idade2
console.log(`${primeiroUsuario.nome} você tem ${primeiroUsuario.idade} anos.`)
console.log(`${segundoUsuario.nome} você tem ${segundoUsuario.idade} anos.`)

if(idade1 > idade2){
    console.log(`${primeiroUsuario.nome} você é o mais velho.`)
}else if(idade1 < idade2){
    console.log(`${segundoUsuario.nome} você é o mais velho.`)
}else if(idade1 == idade2){
    console.log(`Vocês tem a mesma idade.`)
}