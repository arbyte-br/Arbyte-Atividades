let rs = require ("readline-sync")

    class Usuario {
        constructor (nome) {
        this.nome = rs.question ("Qual seu nome? \n")
        }
    }
    const usuario = new Usuario
    console.log (usuario)  