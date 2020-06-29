/*  (OBRIGATÓRIO)​ Faça um algoritmo que receba o nome de dois jogadores e após isso peça 5 números de 1 a 10
 para cada jogador. Primeiro para o jogador A e depois para o jogador B.  Após a escolha de cada jogador o algoritmo
  deve apresentar quais foram os números que apenas o jogador A e B colocou sem repetir nenhum número EX:
   Jogador A : 1, 2, 3, 4, 5 Jogador B : 1,2,3,8,7 
 
Algoritmo imprime : 1,2,3,4,5,7,8 */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Variável onde pedimos para o usuário inserir o nome do jogador 1.
var jogador1 = readline.question('Insira o nome do jogador 1? ')
// Variável onde pedimos para o usuário inserir o nome do jogador 2.
var jogador2 = readline.question('Insira o nome do jogador 2? ')
// Aqui criamos dois arrays vazios para armazenar os números dos dois jogadores.
var array1 = []
var array2 = []

// Condição, definimos a variável 'i' com o valor de 0, depois dizemos que enquanto 'i' for menor (<) que 5, incremente mais um (i++) e faça o loop.
for (i = 0; i < 5; i++) {
    // Criamos uma variável chamada 'numero' e nela pedimos para o usuário inserir um número.
    var numero = readline.questionInt(`Por favor ${jogador1}, insira um numero: `)
    // Logo após usamos a função '.push' para jogar a variável 'numero' dentro do array 'array1'.
    array1.push(numero)
    // E continuamos o loop até a variável 'i' ser menor (<) que 5.
}
// Condição, definimos a variável 'i' com o valor de 0, depois dizemos que enquanto 'i' for menor (<) que 5, incremente mais um (i++) e faça o loop.
for (i = 0; i < 5; i++) {
    // Novamente chamamos a variável 'numero' e pedimos para o usuário inserir um número.
    var numero = readline.questionInt(`Por favor ${jogador2}, insira um numero: `)
    // Logo após utilizaos a função '.push' para jogar a variável 'numero' dentro do array 'array2'.
    array2.push(numero)
    // E continuamos no loop até a variável 'i' ser menor (<) que 5.
}

// Condição, definimos a variável 'i' com o valor de 0, depois dizemos que enquanto 'i' for menor (<) que 5, incremente mais um (i++) e faça o loop.
for (i = 0; i < 5; i++) {
    // Aqui criamos uma variável com o nome de 'elemento' ela vai conter o valor de 'array1[i]' array1 com índice 'i'.
    var elemento = array1[i]
    // Condição, se (IF) array2.includes(elemento), dentro do 'array2' tem o valor de 'elemento'? Se sim:
    if (array2.includes(elemento))  {
        // nada
    }
    // Senão:
    else { 
        // Empurramos para o 'array2' o valor da variável 'elemento'.
        array2.push(elemento)
    }
    // E continuamos no loop até a variável 'i' ser menor (<) que 5.
}

// .join = As conversões em string de todos os elementos de um array são juntados em apenas uma string.
// Sintaxe arr.join([separador = ','])

// Por fim utilizamos a função '.join' para imprimir o array 'array2' como uma string separada por virgulas.
console.log(`Os números inseridos foram: ${array2.join(',')}`)
