let rs = require("readline-sync")

class Carro {
    constructor() {
        this.nome = rs.question("Digite a marca do carro\n>>");
        this.marca = rs.question("Digite o modelo do carro\n>>");
        this.cor = rs.question("Digite a cor do carro\n>>");
    }
}

const cadastroCarro = new Carro();
const cadastroCarro2 = new Carro();
    
    


if(cadastroCarro.nome === cadastroCarro2.nome){
    if(cadastroCarro.marca === cadastroCarro2.marca){
    console.log("Os carros são iguais")

}
else{
    console.log("Os carros não são iguais")
}
}


