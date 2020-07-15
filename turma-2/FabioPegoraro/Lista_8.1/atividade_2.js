//Crie um programa que: 
//a. Peça o nome de 1 usuário; OK
//b. Peça a sua data de nascimento no formato DD/MM/AAAA (ex: 24/12/1990); ok
//c. Com base na data de nascimento, calcule sua idade (a data de hoje você mesmo pode definir em uma variável); ok
//d. Imprima na tela a idade do usuário. ok
//e. Pare a execução. 
 
//Neste exercício, o usuário deve ser representado por um objeto. 
//O nome, a data de nascimento e a sua idade devem ser propriedades deste objeto. 

let rs = require("readline-sync")

let nomeUsuario = rs.question("Qual o seu nome?\n")

let dataUsuario = rs.question("Qual a sua data de nascimento?(ex.: 24/12/1990)\n")

let dataHoje = {
dia: '15',
mes: '07',
ano: '2020',
}

let dadosUsuario = {
    dia: dataUsuario.substring(0,2),
    mes: dataUsuario.substring(3,5),
    ano: dataUsuario.substring(6,10),
    nome: nomeUsuario
    }
        
let idade = dataHoje.ano - dadosUsuario.ano

if (dadosUsuario.dia > dataHoje.dia && dadosUsuario.mes >= dataHoje.mes){
    idade -= 1
    console.log(dadosUsuario.nome, "sua idade é:", idade)
    }else if (dadosUsuario.mes > dataHoje.mes){
    idade -= 1
    console.log(dadosUsuario.nome, "sua idade é:", idade)
    }else{
    console.log(dadosUsuario.nome, "sua idade é:", idade)
    }

    


    
        
    


 