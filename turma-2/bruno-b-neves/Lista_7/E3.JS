// BIBLIOTECA "READLINE-SYNC"
var rs = require('readline-sync');
// MEU ESCOPO
var dia = 1000 * 60 * 60 * 24;
var hoje = new Date();
var nasceu = rs.questionInt('Escreva sua data de nascimento: AAAA/MM/DD: ');
var nasceuData = new Date(nasceu);
// Função da minha lógica
function dias (atual, nasceuData){
  var hoje = atual.getTime();
  var nascimento = nasceuData.getTime();
  var diferente = Math.abs (hoje - nascimento);
  return Math.round(diferente/dia)
}

console.log(dias(hoje, nasceuData))