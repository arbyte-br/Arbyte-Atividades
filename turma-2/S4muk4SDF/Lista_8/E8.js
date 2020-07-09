let rs = require("readline-sync")

let listaCarros = []

let interruptor = true

while (interruptor === true) {

    let perguntaUsuario = rs.question("Digite 1 para adicionar veiculos; \nDigite 2 para exibir os veiculos adiconados; \nDigite 3 para fechar o programa; \n")
    
    if (perguntaUsuario === "1") {

        let perguntaMarca = rs.question("Qual a marca do carro? \n")
        let perguntaModelo = rs.question("Qual o modelo do carro? \n")
        let perguntaCor = rs.question("Qual a cor do carro? \n")
        let perguntaPreco = rs.question("Qual o preço do carro? \n")

        let carro = {
            marca: perguntaMarca,
            modelo: perguntaModelo,
            cor: perguntaCor,
            preco: "R$" + perguntaPreco,
        }

            listaCarros.push(carro)
    } else if (perguntaUsuario === "2") {

        console.log(listaCarros)

    } else if (perguntaUsuario === "3") {

        interruptor = false

    }
}