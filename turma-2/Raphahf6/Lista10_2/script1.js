const rs = require('readline-sync')
class Usuario {
  constructor(nome, saldoNoCartao) {
    this.nome = nome
    this.saldoNoCartao = saldoNoCartao
    this.carrinho = []
  }
}
// criei o pedro e dei 50 reais pro pedro
let usuario = new Usuario('Pedro', 50)
// tô criando um produto, que tem código, nome e valor
class Produto {
  constructor(codigo, nome, valor) {
    this.codigo = codigo
    this.nome = nome
    this.valor = valor
  }
}
class Mercado {
  constructor(nome, dono) {
    // dando um nome pro mercado (Extra, Dia, Paulistão)
    this.nome = nome
    this.dono = dono
    // colocando produtos no mercado
    // Quando eu crio um produto, esses são os parâmetros
    // constructor(codigo, nome, valor)
    let maca = new Produto(
      1, // código = id
      'Maçã', // nome
      2.30 // valor, R$ 2
    )
    // estou criando cada produto que vou vender no mercado, agora é a uva
    let uva = new Produto(2, 'Uva', 8)
    // estou criando agora a Uva Sem Caroço
    let uvaSemCaroco = new Produto(3, 'Uva Sem Caroço', 16)
    this.produtos = [maca, uva, uvaSemCaroco]
  }
  listarProdutos() {
    // this.produtos: [
    //   0: Produto { codigo: 1, nome: 'Maçã', valor: 2.3 },
    //   1: Produto { codigo: 2, nome: 'Uva', valor: 8 },
    //   2: Produto { codigo: 3, nome: 'Uva Sem Caroço', valor: 16 }
    // ]
    // this.produtos.length é o tamanho da lista que eu tenho
    // i++ é o que fala "vai pro próximo"
    // começo no 0 (let i = 0) e depois vou fazendo i++ ("vai pro próximo")
    // vou andar em cada produto e exibir na tela
    for (let i = 0; i < this.produtos.length; i++) {
      // pego o produto atual de acordo com o índice
      // [i] estou acessando o que tiver na posição i
      let produtoAtual = this.produtos[i]
      // i = 0
      // quero pegar de [ 2 ]
      // Lista de Produtos
      // -------------|
      //      Maçã    | -> 0
      // -------------|
      //      Uva     | -> 1
      // -------------|
      //      Uva Sem | -> 2
      // -------------|
      console.log("[" + produtoAtual.codigo + "] - " +
        produtoAtual.nome + " custa R$ " + produtoAtual.valor)
    }
  }
}
let roberto = new Usuario('Roberto', 20)
let mercado = new Mercado('Mercado Arbyte', roberto)
// dentro disso, eu tenho um usuário
// qual usuário? o Roberto que eu criei ali em cima
// então o usuário (que é, a Classe Usuário), tem as propriedades dele
// então, pra acessar a propriedade, eu uso o PONTO
// mercado . dono (acessei a propriedade dono)
// mercado . dono . nome (acessei a propriedade nome do dono do mercado)
// pensar no . como se fosse um DO (dô)
// console.log("Mostrando o que eu encontro dentro do mercado.dono")
// console.log(mercado.dono)
// console.log("\n\n\n\n")
// console.log("Bem-vindo ao " + mercado.nome + "! Aqui quem manda é o " + mercado.dono.nome + "\n\n\n")
function comprar() {
  mercado.listarProdutos()
  let produtoEscolhido
  let valorTotalDaCompra = 0
  produtoEscolhido = rs.question("Escolha seu produto")
  // console.log("Opção: " + produtoEscolhido)
  while (produtoEscolhido > 0 && produtoEscolhido < 4) {
    // encontrando o produto escolhido dentro da lista de produtos do mercado
    let produto = mercado.produtos[produtoEscolhido - 1]
    console.log("Produto que o usuário escolheu é: " + produto.nome)
    // adicionar ao carrinho o produto, que é um objeto Produto
    // é um objeto da classe produto quando criei o mercado
    usuario.carrinho.push(produto)
    valorTotalDaCompra = valorTotalDaCompra + produto.valor
    // valorTotalDaCompra += produto.valor é o mesmo comando da linha acima
    console.log("\nAté agora, a sua compra está saindo R$ " + valorTotalDaCompra + "\n")
    let continuar = rs.questionInt("\n\n\nMais alguma coisa?\n1 - sim\n2 - não\n")
    // se o continuar for 1, a resposta foi "sim" e o usuário quer continuar
    if (continuar === 1) {
      // mostro a lista de novo
      mercado.listarProdutos()
      // pergunto para o usuário qual o produto que ele quer
      produtoEscolhido = rs.question("Escolha seu produto")
    } // se não for 1, quer dizer que ele não quer continuar
    else {
      break
    }
  }
  // só estou mostrando o carrinho no final
  console.log("Carrinho: ")
  console.log(usuario.carrinho)
  console.log("E o total da sua compra é de R$ " + valorTotalDaCompra)
  console.log("Processando...")
  pagarProduto(usuario.carrinho)

}
// 1. Quando eu tentar passar o cartão, quero que ele passe o cartão para cada produto no carrinho
//    então só avisar que a compra foi concluída se todos os produtos passarem no cartão
//    Considerando esse carrinho
//    1) Produto { codigo: 3, nome: 'Uva Sem Caroço', valor: 16 },
//    2) Produto { codigo: 3, nome: 'Uva Sem Caroço', valor: 16 },
//    3) Produto { codigo: 3, nome: 'Uva Sem Caroço', valor: 16 },
//    4) Produto { codigo: 3, nome: 'Uva Sem Caroço', valor: 16 }
//    Tentar passar o primeiro produto e tirar do saldo do cartão
//    Tentar passar o segundo produto e tirar do saldo do cartão
//    e assim vai
//    a compra só é concluída se todos os produtos passarem
//    Então, seria legal se tivesse uma função para pagarProduto(produto)
// 2. Quando não passar todos os produtos, aviso quais produtos ficariam de fora (nome e valor do produto)
// 3. Depois de passar o cartão, perguntar se o usuário quer comprar mais alguma coisa, então, se ele quiser
//    voltar para o menu de produtos com um novo carrinho (criar um limparCarrinho no usuário ou uma classe Carrinho)
// 4. Colocar uma opção para o carrinho ser entregue (usar promise e timeout)
//    (timeout para demorar um pouco para entregar)
//    Quando o usuário escolher que quer uma entrega, criar uma promise para realizar essa entrega e
//    agradecer pela compra logo depois da promise
//    "Agendamos sua entrega"
//    "Agradecemos sua compra!"
//    alguns segundos depois, com a promise concluída, aparecerá uma mensagem de "Carrinho entregue"


function pagarProduto(carrinho) {
  let saldo = usuario.saldoNoCartao

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      carrinho.forEach(produto => {

        if (saldo < produto.valor) {
          console.log(`O ${produto.nome} não passou porque o seu saldo é de ${saldo} reais`)
        } else {

          saldo -= produto.valor
          console.log('Transação aceita')
          console.log(`Seu saldo é ${saldo} reais`)
        }

      })
    }, 2000);

  })



}

comprar()



