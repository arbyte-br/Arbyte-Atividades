// (OBRIGATÓRIO) Faça uma programa que receba 4 notas e calcule a mediana e
// apresente ao usuário o resultado.
// Utilize o pacote : https://www.npmjs.com/package/median

// var  mediana  = exigir ( ' mediana ' ) 
// var  arr  = [ 1 , 15 , 200 , 30 ]    
//  valor  var = mediana ( arr ) 
 
// console . log ( " valor mediano é  " +  valor ) 

let median = require('median')
let rs = require('readline-sync') 


let  notas  = []
    let atividade1 = rs.questionFloat('Digite su nota em Atividade 1: \n')
    let atividade2 = rs.questionFloat('Digite su nota em Atividade 2: \n')
    let atividade3 = rs.questionFloat('Digite su nota em Atividade 3: \n')
    let atividade4 = rs.questionFloat('Digite su nota em Atividade 4: \n')
    
notas.push(atividade1, atividade2, atividade3, atividade4)
let media = median(notas) 
 
console.log ( " Sua média final na matéria em questão é:  " + media ) 
console.log(notas)




