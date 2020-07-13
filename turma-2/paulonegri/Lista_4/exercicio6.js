/*Crie um programa que peça ao usuário o nome e a idade de n pessoas e os imprima na
tela (EX.: “O nome digitado foi: Robson”.). O programa deve ser interrompido quando o
usuário digitar o nome “Final”. No final, o programa deve imprimir o número de usuários
que foram cadastrados no total*/

let rs = require(`readline-sync`)
let nome
let idade
let i = 0
let lista = []

while(nome !== 'Final'){
    nome = rs.question(`Digite seu nome: `)
    if(nome === 'Final' ||nome === 'final' ){
        break
    }
    idade = rs.question(`Digite sua idade: `)
    
    let resp = `O nome do digitador foi ${nome} e ele tem ${idade} anos.`
    lista.push(resp)
    i++
}
console.log(lista)
console.log(`Foram ${i} usuarios cadastrados.`)