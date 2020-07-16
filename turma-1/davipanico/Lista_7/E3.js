/* (OBRIGATÓRIO) ​Faça uma função que recebe a idade de uma pessoa em anos,
 meses e dias e retorna essa idade expressa em dias. Solicite a data ao usuário e o algoritmo imprime
  a quantidade de dias como resultado utilizando a função criada. 
*/
 

// Nesse exercício iremos usar algumas funções nativas do javascript, então caso tenha qualquer dúvida verifique a documentação do javascript para mais informações!


// Aqui chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Variável onde definimos quanto é um dia em milissegundos.
var umDia = 1000 * 60 * 60 * 24
// Variável onde armazenamos a data de hoje. A função 'new Date()' retorna a data atual de quando o script é rodado.
var hoje = new Date()
// Variável onde iremos pedir ao usuário que insira sua data de nascimento. Por padrão ela vai vir como uma string.
var nascimento = readline.question('Escreva o sua data de nascimento! AAAA/MM/DD ')
// Aqui iremos utilizar a função 'new Date()' informando a variável 'nascimento' como parâmetro, a função irá converter a string para o formato de data javascript!
var nascimentoData = new Date(nascimento)

// Agora criamos nossa função com o nome de 'dias' e passamos como parâmetros a variável 'hoje' e 'nascimentoData'.
function dias (hoje, nascimentoData) {
  // Nessa variável iremos armazenar quantos milissegundos possuí a variável 'hoje', para isso utilizamos a função 'getTime()', essa função retorna em milissegundos a data fornecida.
  var hojeMS = hoje.getTime()
  // Fazemos a mesma coisa com a variável 'nascimentoData', pois iremos precisar saber os milissegundos de cada data.
  var nascimentoMS = nascimentoData.getTime()

  // Após ter os milissegundos de cada data iremos calcular a diferença, para isso utilizamos o 'Math.abs', e como parâmetro subtraimos (-) a variável 'hojeMS' pela variável 'nascimentoMS'.
  var diferencaMS = Math.abs (hojeMS - nascimentoMS)

  // Por fim, no retorno da função dividimos a variável 'diferencaMS' pela variável 'umDia', aqui eu utilizei o 'Math.round' apenas para aredondar o número, não é obrigatório.
  return Math.round(diferencaMS/umDia)

}

// Basta imprimir a função fornecendo os parâmetros.
console.log(dias(hoje,nascimentoData))