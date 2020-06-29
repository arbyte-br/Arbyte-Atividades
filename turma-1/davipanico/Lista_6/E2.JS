/*  (OBRIGATÓRIO)​ Faça um algoritmo que receba o nome de dois jogadores e após isso peça 5 números de 1 a 10
 para cada jogador. Primeiro para o jogador A e depois para o jogador B.
   Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números que apenas
     jogador A colocou diferente do B. EX: Jogador A : 1, 2, 3, 4, 5 Jogador B : 1,2,3,8,7 Algoritmo imprime : 4, 5
      Esse é um problema classicamente conhecido como Left Join */

// Variável onde chamamos o 'readline-sync'
var readline = require('readline-sync')

// Variável onde pedimos para o usuário inserir o nome do jogador 1.
var jogador1 = readline.question('Insira o nome do jogador 1? ')
// Variável onde pedimos para o usuário inserir o nome do jogador 2.
var jogador2 = readline.question('Insira o nome do jogador 2? ')
// Aqui criamos dois arrays vazios para armazenar os números dos dois jogadores.
var array1 = []
var array2 = []
// Por fim criamos outro array vazio onde iremos salvar os números que forem diferentes.
var numerosDiferentes = []

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


//O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
// Condição, definimos o valor de 'i' como 0 e, enquanto 'i' for menor (<) que 5, incrementamos mais um (i++) e vamos pro loop.
for (i = 0; i < 5; i++) {
    // Aqui criamos uma nova variável chamada 'elemento' e, o valor dela será um elemento do 'array1' por isso utilizamos o [i] para definir qual elemento queremos.
    var elemento = array1[i]
    // Condição, se (IF) array2.includes(elemento)- Se dentro do array 2 tiver o valor da variável 'elemento', então não faça nada.
    if (array2.includes(elemento)) {
        //nada
    }
    // Senão (else), vamos pegar a variável 'elemento' e dar push do valor dela no array 'numerosDiferentes'.
    else {
        numerosDiferentes.push(elemento)
    }
}

// .join = As conversões em string de todos os elementos de um array são juntados em apenas uma string.
// Sintaxe arr.join([separador = ','])

// Por fim utilizamos a função '.join' para imprimir o array 'numerosDifentes' como uma string separada por virgulas.
console.log(`Os números diferentes foram: ${numerosDiferentes.join(',')}`)
