/*Faça um programa que pergunte ao usuário escolher duas opções A e B.
A encerra o programa, B é pra fazer uma soma.
a. Se o usuário inserir A o programa fecha
b. Se o usuário inserir B o programa vai realizar uma operação de soma,
solicitando dois números inteiros (n1 e n2) onde após o usuário inserir o
segundo número o algoritmo deve apresentar a soma e também pergunta se
quer realizar outro cálculo.
c. Se o usuário inserir qualquer coisa diferente de A ou B o programa deve dizer
que não entendeu o comando e solicitar novamente para inserir A ou B*/

let rs = require(`readline-sync`)
let pergunta = rs.question(`Escolha entre "A" ou "B" > `).toUpperCase()
let novocalculo

while(pergunta !== 'A' && pergunta !== 'B'){
    console.log(`Comando nao aceito, digite novamente`)
    pergunta = rs.question(`Escolha entre "A" ou "B" > `).toUpperCase()
}
while(novocalculo !== 'nao' && pergunta !== 'A'){
    if(pergunta == 'B'){
        let n1 = rs.questionInt(`Digite o primeiro numero da soma> `)
        let n2 = rs.questionInt(`Digite o segundo numero da soma> `)
        console.log(n1 + n2)
    }
     novocalculo = rs.question(`Gostaria de fazer uma nova conta?\n`)
}
