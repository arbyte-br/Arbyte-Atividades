const sqlite3 = require('sqlite3')
function Sqlite3DB (_arquivo,_tabelas) {
  var db
  async function abrir () {
    await new Promise((aceite,rejeite) => {
      db = new sqlite3.Database(_arquivo,(erro) => {
        if (erro) { rejeite(erro); return }
        aceite()
      })
    })
    await _tabelas.map((t) => t.criar()).reduce(
      async (p,c) => { await p; await consultar(c); },
      Promise.resolve())
  }
  async function consultar (consulta, args = []) {
    if (!db) { throw('Banco não está conectado') }
    var linhas = await new Promise((aceite,rejeite) => {
      db.all(consulta, args, (erro,resultado) => {
        if (erro) { rejeite(erro); return }
        aceite(resultado)
      })
    })
    return linhas
  }
  return {abrir,consultar}
}
module.exports = Sqlite3DB
