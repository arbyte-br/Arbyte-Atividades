// (OBRIGATÓRIO) - Usando a classe do exercício anterior, crie métodos que representem possíveis ações do usuário no aplicativo.
// ex: solicitarNovaViagem(local), editarEnderecoPrimario(endereco), adicionarFormaDePagamento(pagamento)
let rs = require('readline-sync')
let UsuarioDoApp = require('./ex1.js')

const usuario1 = new UsuarioDoApp('Rafael','rafael.marinho96@hotmail.com','Rua Ana Neri, 100','Dinheiro')
console.log('Antes das modificações: \n', usuario1)
// usuario1.imprimeUsuario()

let local = 'Av Consolação'
usuario1.setSolicitarNovaViagem(local)
let enderecoNovo = 'Rua Nestor Pestana, 27'
usuario1.setEditarEnderecoPrimario(enderecoNovo)
let formasDePagamento = ['Dinheiro','Cartão de crédito','Cartão de débito','Cheque',]
let novaFormaDePagamento = rs.keyInSelect(formasDePagamento, 'Qual a nova forma de pagamento?')
usuario1.setAdicionarFormaDePagamento(formasDePagamento[novaFormaDePagamento])

console.log('Depois das modificações: \n', usuario1)  // ta ok
// console.log('Depois das modificações: \n' + usuario1)  // da object Object
// usuario1.imprimeUsuario()
    