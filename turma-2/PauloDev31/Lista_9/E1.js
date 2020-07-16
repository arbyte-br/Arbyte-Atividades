let rs = require('readline-sync')
let median = require('median')

let valores  = []    
 let pergunta = rs.questionInt('insira um numero para calcular a media: ')
 valores.push(pergunta)
 let perguntaDois = rs.questionInt('insira mais um numero para calcular a media: ')
 valores.push(perguntaDois)
 let perguntaTres = rs.questionInt('insira outro numero para calcular a media: ')
 valores.push(perguntaTres)
 let perguntaQuatro = rs.questionInt('insira um ultimo numero para calcular a media: ')
 valores.push(perguntaQuatro)

 let valor = median(valores)
console . log ( " valor mediano é  " +  valor ) 
