/*  (OBRIGATÓRIO)​Adicione no programa anterior, após a impressão dos dados, a funcionalidade de salvar o objeto
 carro em formato JSON.  Utilize o JSON.stringify para transformar o objeto em string e após isso utilize
  os métodos da biblioteca ‘fs’ para salvar o arquivo. Salve o json como ‘carro.json’ 
*/
 
// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')
// Variável onde chamamos o 'file-system'.
var fs = require('fs')

// Variável onde criamos um objeto vazio chamado de 'carro'.
var carro = {}
// Aqui chamamos a propriedade 'cor' do objeto 'carro' e pedimos para que o usuário insira qual a cor do carro.
carro.cor = readline.question('Qual a cor do carro? ')
// Aqui chamamos a propriedade 'modelo' do objeto 'carro' e pedimos para que o usuário insira qual o modelo do carro.
carro.modelo = readline.question('Qual a modelo do carro? ')
// Aqui chamamos a propriedade 'marca' do objeto 'carro' e pedimos para que o usuário insira qual o modelo do carro.
carro.marca = readline.question('Qual a marca do carro? ')

// Aqui iremos serealizar nosso objeto 'carro' e armazenar na variável 'carroSerializado'.
var carroSerializado = JSON.stringify(carro)
// Depois criamos a variável 'caminhoDoArquivo' e o valor da variável será o caminho do arquivo 'carros.json'.
// Aqui eu criei uma pasta 'data' dentro da pasta 'lista_8' assim o código fica mais organizado, o './' significa a pasta que eu estou no momento.
var caminhoDoArquivo = './data/carros.json'
// Por fim utilizamos a função 'fs.writeFileSync' passando como parâmetro a variável 'caminhoDoArquivo' e 'carroSerializado'.
fs.writeFileSync(caminhoDoArquivo, carroSerializado)

// Após isso o 'fs' ira salvar nosso objeto no arquivo carros.json