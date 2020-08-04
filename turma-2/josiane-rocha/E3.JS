/* (OBRIGATÓRIO) - Crie um método estático que calcule a estimativa de valor da corrida. Ele deve receber um valor em km e retornar um valor em reais */

const {HorseApp} = require('./E1');

class ValueRun {

    static getId(km, value){
        return `Valor estimado da corrida: ${km * value} R$`;
    }
}

const app = new HorseApp('aline sampaio', 'aline@sampaio.com.br', 'rua das margaridas', 'pic pay', 'rua das raivosas');

console.log(app);
console.log(ValueRun.getId(3, 5));