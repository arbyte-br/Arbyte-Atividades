const rs = require('readline-sync')
const Carro = require('./carro')

let novoCarro = new Carro("Toyota", "Corolla", "Preto", 0)

do{
    
    var opcao = rs.question('Oque deseja fazer: acelerar, freiar ou desligar ? ')
    opcao = opcao.toLocaleLowerCase()
    if(opcao === "acelerar"){
        novoCarro.Acelerar()
    } else if (opcao === "freiar"){
        novoCarro.Freiar()
    } else if (opcao === "desligar"){
        if(novoCarro.Desligar()){
            break
        }
    } else {
        console.log("Opção inválida, tente novamente.")
    }

}while(opcao)