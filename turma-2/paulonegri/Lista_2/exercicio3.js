/*Fazer um programa que leia um valor de DDI e informe o nome do país
Correspondente ao DDI. Por exemplo:
Se lê 1 imprime "Estados Unidos",
Se lê 49 imprime "Alemanha",
Se lê 54 imprime "Argentina",
Se lê 55 imprime "Brasil",
Se lê 35 imprime "Portugal".
Deve também imprimir uma mensagem caso o DDI não esteja cadastrado.*/

let rs = require(`readline-sync`)
let ddi = rs.question(`Digite o DDI aqui> `)

if(ddi == '1' || ddi == '01'){
    console.log(`Esse DDI pertence a Alemanha`)
}else if(ddi == '2' || ddi == '02'){
    console.log(`Esse DDI pertence a França`)
}else if(ddi == '94'){
    console.log(`Esse DDI pertence ao Brazil`)
}else if(ddi == '51'){
    console.log(`Esse DDI pertence aos EUA `)
}else if(ddi == '23'){
    console.log(`Esse DDI pertence ao Canada`)
}else if(ddi == '69'){
    console.log(`Esse DDI pertence ao Japao`)
}else{
    console.log(`DDI não cadastrado!`)
}