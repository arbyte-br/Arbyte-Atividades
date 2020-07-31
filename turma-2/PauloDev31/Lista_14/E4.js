// (OBRIGATÓRIO)Faça um algoritmo que receba uma CEP e diga qual é o endereço
// completo (Cidade, rua, estado) deste CEP.
// Utilize a API : https://api.postmon.com.br/v1/cep/{CEP}
// Exemplo CEP :https://api.postmon.com.br/v1/cep/89010020

const rs = require('readline-sync')
const axios = require('axios')
class Usuario {
    constructor(nome, cep) {
        this.nome = nome
        this.cep = cep
    }
}
let usuario = new Usuario('Usuario', rs.question('Digite aqui seu cep: '))

buscaEndereco(usuario.cep)
function buscaEndereco(cep) {

    console.log("Buscando informações do endereço para o cep: " + cep + "...")
    const urlComCep = "https://api.postmon.com.br/v1/cep/" + cep
    axios.get(urlComCep)
        .then(res => {
            console.log("Rua: " + res.data.logradouro)
            console.log("Bairro: " + res.data.bairro)
            console.log("Cidade: " + res.data.cidade)
            console.log("Estado: " + res.data.estado)
        })
        .catch(err => {
            console.log("Deu erro: " + err)
        })
}