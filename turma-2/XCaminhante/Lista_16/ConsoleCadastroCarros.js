const rs = require('readline-sync')
require('console.table')
function ConsoleCadastroCarros (_db,_tCarros) {
  var _cColunas = _tCarros.colunas()
  var _cNome = _cColunas['nome']
  var _cCor = _cColunas['cor']
  var _cAno = _cColunas['ano']
  // Principais:
  function prompt () { return 'carros> ' }
  function sair () { return 'Até mais!' }
  function ajuda () {
    return `
  Cadastro de carros

  Comandos básicos:
    i - insere um novo carro
    l - lista os carros cadastrados
    r - remove um ou mais carros
    X - remove todos os carros do cadastro
    T - cadastra uma lista de teste
    s - sair
    qualquer coisa diferente - mostra essa ajuda

  Comandos, parte 2:
    C - mostra o carro mais caro cadastrado
    B - mostra o carro mais barato
    p - lista os carros ordenados por preço, decrescente
    n - número de carros cadastrados
    c - pesquisa por cor
    a - pesquisa por ano
    M - pesquisa carros com ano maior que o valor passado
    m - pesquisa carros com ano menor que o valor passado
  `
  }
  async function interacao () {
    var linha = rs.question(prompt())
    switch( linha.charAt(0) ) {
    // Parte 1:
    case 'i': await inserir(); break
    case 'l': await listar(); break
    case 'r': await remover(); break
    case 'X': await removerTodos(); break
    case 'T': await inserirTeste(); break
    case 's': console.log(sair()); return false
    // Parte 2:
    case 'C': await mostrarCarroMaisCaro(); break
    case 'B': await mostrarCarroMaisBarato(); break
    case 'p': await listarOrdenandoPrecoDecrescente(); break
    case 'n': await mostrarNumeroRegistros(); break
    case 'c': await pesquisarPorCor(); break
    case 'a': await pesquisarPorAno(); break
    case 'M': await pesquisarAnosMaiores(); break
    case 'm': await pesquisarAnosMenores(); break
    default: console.log(ajuda())
    }
    return true
  }
  async function operarContinuamente () {
    var continuar = true
    while (continuar) {
      try {
        continuar = await interacao()
      } catch (e) {
        console.log('Problema: '+e)
        continuar = false
      }
    }
  }
  // Parte 1:
  async function inserir () {
    console.log('Inserir carro no cadastro:')
    var valores = _tCarros.valores().pedir()
    var nome = valores[_cNome.i]
    while ( await carrosComNome(nome) != 0 ) {
      console.log('Carro já cadastrado, use outro nome');
      nome = _cNome.c.pedirValor()
    }
    valores[_cNome.i] = nome
    await _db.consultar(_tCarros.inserir(),valores)
    console.log('Feito')
  }
  async function listar () {
    var r = await _db.consultar(_tCarros.pesquisar())
    if (r.length == 0) { console.log('Não há carros cadastrados'); return }
    console.log('Carros cadastrados:\n')
    console.table(r)
  }
  async function remover () {
    var numr = await numeroRegistros()
    if (numr == 0) { console.log('Não há carros cadastrados'); return }
    console.log('Remover um carro:')
    var nome = _cNome.c.pedirValor()
    if (await carrosComNome(nome) == 0) { console.log('Não há carro cadastrado com esse nome'); return }
    await _db.consultar(_tCarros.apagar('where nome = ?'), nome)
    console.log('Feito')
  }
  async function removerTodos () {
    var numr = await numeroRegistros()
    if (numr == 0) { console.log('Não há carros cadastrados'); return }
    var linha = rs.question('Tem certeza de que quer remover TODOS os carros? (s/N) ')
    if ( 'sS'.indexOf(linha.trim().charAt(0)) == -1 ) { console.log('Cancelado'); return }
    await _db.consultar(_tCarros.apagar())
    console.log('Feito')
  }
  async function inserirTeste () {
    await [
      ['Fiat Uno','branco',1995,20000],
      ['Ferrari','vermelha',2000,1000000],
      ['Gol GTI','preto',2005,50000],
      ['Santana','prata',1997,50000],
      ['Meriva','branco',2010,40000],
    ].reduce(async (p,c) => {
      await p
      if (await carrosComNome(c[_cNome.i]) == 0) { await _db.consultar(_tCarros.inserir(), c) }
    }, Promise.resolve())
    console.log('Feito')
  }
  // Parte 2:
  async function mostrarCarroMaisCaro () {
    var r = await _db.consultar(_tCarros.pesquisar('*','where valor = (select max(valor) from Carro) limit 1'))
    if (r.length == 0) { console.log('Não há carros cadastrados'); return }
    console.log('Carro mais caro:\n')
    console.table(r)
  }
  async function mostrarCarroMaisBarato () {
    var r = await _db.consultar(_tCarros.pesquisar('*','where valor = (select min(valor) from Carro) limit 1'))
    if (r.length == 0) { console.log('Não há carros cadastrados'); return }
    console.log('Carro mais barato:\n')
    console.table(r)
  }
  async function listarOrdenandoPrecoDecrescente () {
    var r = await _db.consultar(_tCarros.pesquisar('*','order by valor desc, nome asc'))
    if (r.length == 0) { console.log('Não há carros cadastrados'); return }
    console.log('Carros ordenados por preço:\n')
    console.table(r)
  }
  async function mostrarNumeroRegistros () {
    console.log('Número de carros cadastrados: ' + await numeroRegistros())
  }
  async function pesquisarPorCor () {
    var numr = await numeroRegistros()
    if (numr == 0) { console.log('Não há carros cadastrados'); return }
    console.log('Pesquisar por cor:')
    var cor = _cCor.c.pedirValor()
    var r = await _db.consultar(_tCarros.pesquisar('*','where cor like ?'),cor)
    if (r.length == 0) { console.log('Não há carros cadastrados com essa cor'); return }
    console.log()
    console.table(r)
  }
  async function pesquisarPorAno () {
    var numr = await numeroRegistros()
    if (numr == 0) { console.log('Não há carros cadastrados'); return }
    console.log('Pesquisar por ano:')
    var cor = _cAno.c.pedirValor()
    var r = await _db.consultar(_tCarros.pesquisar('*','where ano = ?'),cor)
    if (r.length == 0) { console.log('Não há carros cadastrados com este ano'); return }
    console.log()
    console.table(r)
  }
  async function pesquisarAnosMaiores () {
    var numr = await numeroRegistros()
    if (numr == 0) { console.log('Não há carros cadastrados'); return }
    console.log('Pesquisar por anos maiores que:')
    var cor = _cAno.c.pedirValor()
    var r = await _db.consultar(_tCarros.pesquisar('*','where ano > ?'),cor)
    if (r.length == 0) { console.log('Não há carros cadastrados acima deste ano'); return }
    console.log()
    console.table(r)
  }
  async function pesquisarAnosMenores () {
    var numr = await numeroRegistros()
    if (numr == 0) { console.log('Não há carros cadastrados'); return }
    console.log('Pesquisar por anos menores que:')
    var cor = _cAno.c.pedirValor()
    var r = await _db.consultar(_tCarros.pesquisar('*','where ano < ?'),cor)
    if (r.length == 0) { console.log('Não há carros cadastrados abaixo deste ano'); return }
    console.log()
    console.table(r)
  }
  // Auxiliares:
  async function carrosComNome (nome) {
    var sql = _tCarros.pesquisar('count(*)', 'where nome = ?')
    var r = await _db.consultar(sql,nome)
    return r[0]['count(*)']
  }
  async function numeroRegistros () {
    var r = await _db.consultar(_tCarros.pesquisar('count(*)'))
    return r[0]['count(*)']
  }
  return {operarContinuamente,ajuda}
}
module.exports = ConsoleCadastroCarros
