let rs = require ("readline-sync")

    class Carro {
        constructor () {
        this.nome = rs.question ("Digite o modelo do carro: (ex: SUV) \n")
        this.marca = rs.question ("Digite a marca do carro: (ex: Fiat) \n")
        this.cor = rs.question ("Digite a cor do carro: (ex: branco) \n")

        this.nome2 = rs.question ("Digite o modelo do segundo carro: (ex: SUV2) \n")
        this.marca2 = rs.question ("Digite a marca do segundo carro: (ex: Fiat2) \n")
        this.cor2 = rs.question ("Digite a cor do segundo carro: (ex: branco2) \n")
        }

        getIgual(){
            let Carro = 0
            if (this.nome == this.nome2 && this.marca == this.marca2 && this.cor != this.cor2){
                return "Você digitou modelos e marcas iguais :)"  
            }
            else {
                return "Você digitou carros e modelos diferentes ;)"
            }
        }
    }
    const carro = new Carro
    console.log (carro.getIgual()) 