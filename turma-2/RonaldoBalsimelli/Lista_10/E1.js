/* 1. (OBRIGATÓRIO) Crie uma aplicação em JS que receba um nome do usuário e crie um
novo usuário com o nome fornecido e o imprima na tela(ex.: "{nome: 'Italo'}"). Este
objeto deve ser criado usando uma classe.
 */

 let rs = require ("readline-sync")

    class Usuario {
        constructor (nome) {
        this.nome = rs.question ("Qual seu nome? \n")
        }
    }
    const usuario = new Usuario
    console.log (usuario) 