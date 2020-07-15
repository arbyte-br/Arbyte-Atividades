//Crie um programa que: 
//a. Peça o nome de 2 usuários; ok
//b. Peça a data de nascimento dos 2 usuários (formato DD/MM/AAAA); ok
//c. Com base nas datas de nascimento, calcule suas idades; ok
//d. Imprima na tela a idade de cada usuário;  ok
//e. Imprima na tela qual é o usuário mais velho e qual o mais novo. 
//f. Pare a execução.

let rs = require("readline-sync")


let nomeUsuario1 = rs.question("Qual o seu nome?\n")

let dataUsuario1 = rs.question("Qual a sua data de nascimento?(ex.: 24/12/1990)\n")

let nomeUsuario2 = rs.question("Qual o seu nome?\n")

let dataUsuario2 = rs.question("Qual a sua data de nascimento?(ex.: 24/12/1990)\n")

let dataHoje = {
dia: '15',
mes: '07',
ano: '2020',
}

let dadosUsuario1 = {
    dia: dataUsuario1.substring(0,2),
    mes: dataUsuario1.substring(3,5),
    ano: dataUsuario1.substring(6,10),
    nome: nomeUsuario1
    }
        
let idade1 = dataHoje.ano - dadosUsuario1.ano

if (dadosUsuario1.dia > dataHoje.dia && dadosUsuario1.mes >= dataHoje.mes){
    idade1 -= 1
    console.log(dadosUsuario1.nome, "sua idade é:", idade1)
    }else if (dadosUsuario1.mes > dataHoje.mes){
    idade1 -= 1
    console.log(dadosUsuario1.nome, "sua idade é:", idade1)
    }else{
    console.log(dadosUsuario1.nome, "sua idade é:", idade1)
    }

    let dadosUsuario2 = {
        dia: dataUsuario2.substring(0,2),
        mes: dataUsuario2.substring(3,5),
        ano: dataUsuario2.substring(6,10),
        nome: nomeUsuario2
        }
            
let idade2 = dataHoje.ano - dadosUsuario2.ano
    
if (dadosUsuario2.dia > dataHoje.dia && dadosUsuario2.mes >= dataHoje.mes){
    idade2 -= 1
    console.log(dadosUsuario2.nome, "sua idade é:", idade2)
    }else if (dadosUsuario2.mes > dataHoje.mes){
    idade2 -= 1
    console.log(dadosUsuario2.nome, "sua idade é:", idade2)
    }else{
    console.log(dadosUsuario2.nome, "sua idade é:", idade2)
}



if (idade1 < idade2){
   console.log(nomeUsuario2 + " você é o mais velho.")
   console.log(nomeUsuario1 + " você é o mais novo.")
}else{
    console.log(nomeUsuario1 + " você é o mais velho.")
    console.log(nomeUsuario2 + " você é o mais novo.")
}


