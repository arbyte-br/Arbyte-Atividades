const rs = require('readline-sync')
function ColunaSQL (_nome, _tipo) {
  function nome () { return _nome }
  function prompt () { return `${_nome} (${_tipo})? ` }
  function toString () { return `${_nome} ${_tipo}` }
  function pedirValor () {
    switch (_tipo) {
    case 'text': return rs.question(prompt())
    case 'integer': return rs.questionInt(prompt())
    default: throw('tipo não implementado') }
  }
  return {nome,toString,pedirValor}
}
function ValoresColunas (_colunas) {
  function pedir () { return _colunas.map((c) => c.pedirValor()) }
  return {pedir}
}
function TabelaSQL (_nome,_colunas) {
  function nome () { return _nome }
  function criar () { return `create table if not exists ${_nome} (${_colunas.join(', ')})` }
  function inserir () {
    var nomesColunas = _colunas.map((c) => c.nome()).join(', ')
    var interrogacoes = Array(_colunas.length).fill('?').join(',')
    return `insert into ${_nome} (${nomesColunas}) values (${interrogacoes})`
  }
  function pesquisar (colunas = '*',selecao) {
    if (Array.isArray(colunas)) { colunas = colunas.join(',') }
    var sql = `select ${colunas} from ${_nome}`
    if (arguments.length == 2) { sql += ` ${selecao}` }
    return sql
  }
  function atualizar (colunas,selecao) {
    var nomesColunas = colunas.map((c) => `${c.nome()} = ?`).join(', ')
    return `update ${_nome} set ${nomes_colunas} ${selecao}`
  }
  function apagar (selecao) {
    return (selecao ?
      `delete from ${_nome} ${selecao}` :
      `delete from ${_nome}`)
  }
  function valores () { return new ValoresColunas(_colunas) }
  function colunas () {
    var cc = {}
    _colunas.forEach( (c,i) => { cc[c.nome()] = {c,i} } )
    return cc
  }
  return {nome,criar,inserir,pesquisar,atualizar,apagar,valores,colunas}
}
module.exports = {ColunaSQL,ValoresColunas,TabelaSQL}
