/*  (OBRIGATÓRIO) ​Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3.pi.R​3​).
 Então solicite ao usuário o raio da esfera e utilize a função para exibir o resultado. */

 // Variável onde chamamos o 'readline-sync'
 var readline = require('readline-sync')
// Variável onde definimos o valor de 'pi' para deixar nosso código mais legível.
 var pi = 3.14
// Variável onde pedimos o raio da esfera para o usuário.
 var raio = readline.questionInt('Qual o raio da esfera? ')

 // Aqui criamos nossa função com  o nome de 'calcularVolume' e, passamos como parâmetro a variável 'raio'.
 function calcularVolume (raio) {
    // Dentro da função criamos uma variável chamada 'raioElevado', onde elevamos o valor da variável 'raio' a 3 para utilizar no cálculo a frente.
    var raioElevado = Math.pow(raio, 3)
    // Agora aqui faremos o cálculo do volume da esfera, primeiro criamos a variável 'volume' e, dentro dela dividimos (/) 4 por 3, multiplicamos (*) por 'pi' e por fim multiplicamos pela variável 'raioElevado'.
    var volume = ((4/3) * pi) * raioElevado
    // Após isso, temos que retornar algo na nossa função, então retornaremos a variável 'volume' nela está armazenada o cálculo do volume da esfera.
    return volume
 }

 // Basta imprimir a função utilizando a variável 'raio' como parâmetro para obter o valor de volume da esfera!
 console.log(calcularVolume(raio), 'Esse é o volume da esfera')