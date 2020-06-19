const ConsoleCadastroCarros = require('./ConsoleCadastroCarros.js')
const {ColunaSQL,ValoresColunas,TabelaSQL} = require('./SQL.js')
const Sqlite3DB = require('./Sqlite3DB.js')
var _nome = new ColunaSQL('nome','text')
var _cor = new ColunaSQL('cor','text')
var _ano = new ColunaSQL('ano','integer')
var _valor = new ColunaSQL('valor','integer')
var _colunas = [ _nome, _cor, _ano, _valor ]
var _carros = new TabelaSQL('Carro',_colunas)
var _sdb = new Sqlite3DB('teste.db',[_carros])
var _ccc = new ConsoleCadastroCarros(_sdb,_carros)
async function main () {
  await _sdb.abrir()
  console.log(_ccc.ajuda())
  _ccc.operarContinuamente()
}
main()
