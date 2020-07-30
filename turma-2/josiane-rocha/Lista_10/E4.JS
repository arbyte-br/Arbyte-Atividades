/*Agora crie um usuário que represente um motorista, com atributos e métodos próprios. Lembre-se que você deve evitar códigoduplicado. Logo, você pode extrair alguns comportamentos do usuário criado anteriormente para um usuário base e a partir daí fazer com que UsuarioCliente e UsuarioMotorista sejam filhas da classe pai.*/
// const {HorseApp} = require('./E1');

class Driver {
    constructor(name, car, board){
        this.name = name;
        this.car = car;
        this.board = board;
    }

    saudacao (){
        return `Olá meu nome é ${this.name} 
        modelo do carro ${this.car} e a placa ${this.board}`;
    }
}

let dvr = new Driver('driver', 'gol', 'abc1234');

console.log(dvr);

class Interation extends Driver{
        constructor (){
            super();
        }
}

let drive = new Driver('new driver', 'palio', 'def5678');
drive.saudacao();

console.log(drive);