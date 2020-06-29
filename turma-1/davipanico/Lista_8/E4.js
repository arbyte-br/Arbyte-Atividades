/* Faça um programa que pergunte ao usuário se ele quer adicionar ou apenas exibir,
 caso o usuário escolha adicionar, altere o programa inicial de cadastro de carro para que não salve 1 objeto
 carro e sim uma coleção de carros (utilizando arrays, em vez de serializar/deserializar o objeto será o array
 que possui os carros).  
 
 Após cadastrar o carro o programa deve novamente solicitar o usuário se quer exibir ou adicionar,
 caso o usuário escolha exibir deve ser exibido todos os carros cadastrados.
*/

// Se você chegou até aqui, significa que você está com sangue nos olhos e quer fazer um programa irado!
// Então eu vou te ajudar utilizando um pouco de tudo que a gente viu no curso até agora.
// Vamo lá!

// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')
// Variável onde chamamos o 'file-system'.
var fs = require('fs')

// Variável onde iremos armazenar os carros cadastrados pelo usuário.
var listaDeCarros = []
// Variável que contém as opções de menu para o usuário.
// Ponto de atenção, em um índice de array lembre-se que o primeiro item sempre será o item 0.
var opcoes = ['Menu', 'Adicionar', 'Exibir', 'Sair']
// Variável onde iremos definir em qual menu o usuário está. Por padrão ele começa no 0.
// 0 = 'Menu'.
var menu = 0

// Condição, enquanto (while) a variável 'menu' for igual (==) a 0, então:
while(menu == 0) {
    // Chamamos novamente a variável 'menu' e perguntamos o que o usuário deseja fazer.
    var menu = readline.keyInSelect(opcoes,'O que você deseja? ')

    // Condição, enquanto (while) a variável 'menu' for igual (==) 1 (1 é o índice de 'Adicionar' nas nossas opções), então:
    while(menu == 1) {
        // Chamamos o array 'listaDeCarros' e damos um '.push' para empurrar o retorno da função 'criarCarro()'.
        // Ponto de atenção, a função 'criarCarro' está declarada fora do while, então desça o código para localizar ela e ver oque ela faz!
        listaDeCarros.push(criarCarro())
        // Por fim setamos o valor de 'menu' para 0, assim o usuário retorna para o menu.
        menu = 0
    }

    // Condição, enquanto (while) a variável 'menu' for igual (==) a 2 (2 é o índice de 'Exibir' nas nossas opções), então:
    while(menu == 2) {
        // Apenas iremos imprimir  o array 'listaDeCarros'.
        console.log(listaDeCarros)
        // Por fim setamos o valor de 'menu' para 0, assim o usuário retorna para o menu.
        menu = 0
    }

    // Não é necessário um while para o índice 3 das nossas opções (sair), pois se for diferente de 0, 1 e 2 ele ira sair do loop.

}

// Aqui criamos nossa função 'criarCarro', nela não passamos nenhum parâmetro.
function criarCarro () {
    // Primeiro criamos um objeto vazio chamado de 'carro'.
    var carro = {}
    // Aqui chamamos a propriedade 'cor' do objeto 'carro' e pedimos para que o usuário insira qual a cor do carro.
    carro.cor = readline.question('Qual a cor do carro? ')
    // Aqui chamamos a propriedade 'modelo' do objeto 'carro' e pedimos para que o usuário insira qual o modelo do carro.
    carro.modelo = readline.question('Qual a modelo do carro? ')
    // Aqui chamamos a propriedade 'marca' do objeto 'carro' e pedimos para que o usuário insira qual o modelo do carro.
    carro.marca = readline.question('Qual a marca do carro? ')

    // Depois basta definir o objeto 'carro' como retorno da função.
    return carro
}

// Aqui iremos serealizar nosso objeto 'carro' e armazenar na variável 'carroSerializado'.
var carrosSerializados = JSON.stringify(listaDeCarros)
// Depois criamos a variável 'caminhoDoArquivo' e o valor da variável será o caminho do arquivo 'carros.json'.
// Aqui eu criei uma pasta 'data' dentro da pasta 'lista_8' assim o código fica mais organizado, o './' significa a pasta que eu estou no momento.
var caminhoDoArquivo = './data/carros.json'
// Por fim utilizamos a função 'fs.writeFileSync' passando como parâmetro a variável 'caminhoDoArquivo' e 'carroSerializado'.
fs.writeFileSync(caminhoDoArquivo, carrosSerializados)
// Após isso o 'fs' ira salvar nosso objeto no arquivo carros.json

// Prontinho, agora você tem sem programa que cadastra e exibi carros!
// Nesse exercício a gente utilizou funções, arrays, loops e as bibliotecas de readline/fs.
// Irado não é mesmo? Se você conseguiu entender tudo parabéns, você está a poucos passos de se tornar um desenvolvedor junior.
// Se não entendeu, não tem problema! Faça novamente e refaça, o importante é que os métodos fixem na sua mente até que ela começe assimilar mais facilmente, não desita!

