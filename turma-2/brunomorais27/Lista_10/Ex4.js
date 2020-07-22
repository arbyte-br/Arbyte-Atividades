
let rs = require('readline-sync')

class carro {
    constructor(carro){
        this.montadora = rs.question('Qual a marca do seu veiculo? \n ').toUpperCase(); 
        this.modelo = rs.question('Digite o modelo do seu veiculo? \n ').toUpperCase();
        this.cor = rs.question('Qual a cor do seu veiculo \n ')
    }

}

const car1 = new carro()
const car2 = new carro()
console.clear()
if(car1.modelo == car2.modelo){
    console.log(`O veiculo 1 (${car1.modelo} ${car1.cor}) é o mesmo modelo do segundo veiculo (${car2.modelo} ${car2.cor}) `) 
}else {
    console.log(`Os veiculos não são iguais`)
}