const rs = require("readline-sync")

const axios = require("axios")

class Usuario {
    constructor(nome, cep) {
      this.nome = nome
      this.cep = cep
    }
  }

let usuario = new Usuario('Pedro', rs.question('Digite aqui seu cep: '))
  // usuario.nome === "Pedro"
  // usuario.cep === "05717900"buscaEndereco(usuario.cep)function buscaEndereco(cep) {
    // aqui dentro dessa função, devo receber um CEP e exibir os dados sobre o endereço
console.log("Buscando informações do endereço para o cep: " + usuario.cep + "...")  // formas diferentes de fazer a linha acima
    // const urlComCep = url + cep
    // const urlComCep = `https://api.postmon.com.br/v1/cep/${cep}`
const url = "https://api.postmon.com.br/v1/cep/"
const urlComCep = "https://api.postmon.com.br/v1/cep/" + usuario.cep  
axios.get(urlComCep)
    .then(respostaDaApiQuandoDaCerto => {
      // geralmente a gente só status, statusText e data
      // let data = respostaDaApiQuandoDaCerto.data
      // console.log(data.bairro)
      // console.log(data.cidade)
      // console.log(data.logradouro)
      console.log("\n\nResposta da API\n\n")
      console.log("Rua: " + respostaDaApiQuandoDaCerto.data.logradouro)
      console.log("Bairro: " + respostaDaApiQuandoDaCerto.data.bairro)
      console.log("Cidade: " + respostaDaApiQuandoDaCerto.data.cidade)
      console.log("Estado: " + respostaDaApiQuandoDaCerto.data.estado)
    })
    .catch(respostaDaApiQuandoDeuErro => {
      console.log("Deu erro: " + respostaDaApiQuandoDeuErro)
    })