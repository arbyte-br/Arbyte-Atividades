// LISTA 14.1
// Ex. 1
// Criar todas essas operações para o nosso mercado
// listar todos os produtos
// verProduto
// criarProduto
// atualizarTudoDoProduto
// atualizarParteDoProduto
// removerProduto
// Utilizar os produtos vindos da API no mercado

const axios = require('axios')
const rs = require('readline-sync')

function listaTodosProdutos() {
  axios.get('http://localhost:3000/produtos')
    .then(respostaDaApi => {
      console.log(respostaDaApi.data)
      let produtoEscolhido = rs.questionInt("Qual produto você quer?")
      listaProduto(produtoEscolhido)
    })
}

// listaTodosProdutos()

function listaProduto(produtoEscolhido) { 
  console.log('O usuario escolheu o produto:' + produtoEscolhido)
  const url = 'http://localhost:3000/produtos' + "/" + produtoEscolhido
  console.log("Quero acessar a url " + url)
  axios.get(url)
    .then(respostaDaApi => {
      console.log(respostaDaApi.data)
    })
}
function criaNovoProduto(nome, preco) {
  // uma ação de post serve para criar um novo registro
  axios.post("http://localhost:3000/produtos", {
    "nome": nome,
    "preco": preco
  })
    .then(respostaDaApi => {
      console.log(respostaDaApi.data)
    })
  }
// criaNovoProduto("Chinelo usado",10)
//  listaTodosProdutos()

function atualizarProdutoInteiro(id, nome, preco) {
    // uma ação de post serve para criar um novo registro
    axios.put("http://localhost:3000/produtos/" + id, {
      "nome": nome,
      "preco": preco,
    })
      .then(respostaDaApi => {
        console.log(respostaDaApi.data)
      })
  }

//   atualizarProdutoInteiro(8,"Feijão branco",8.0)
  
function atualizaParteDoProduto(id, preco) {
    // uma ação de post serve para criar um novo registro
    axios.patch("http://localhost:3000/produtos/" + id, {
      "preco": preco
    })
      .then(respostaDaApi => {
        console.log(respostaDaApi.data)
      })
  }

//   atualizaParteDoProduto(9,20)

function deletarProduto(id) {
    axios.delete("http://localhost:3000/produtos/" + id)
      .then(respostaDaApi => {
        console.log(respostaDaApi.data)
        console.log("DELETADO")
      })
  }





