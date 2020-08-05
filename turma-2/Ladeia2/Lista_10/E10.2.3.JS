  
// (Obrigatório) Crie um programa que simula a compra de um produto no supermercado, o
// programa deve simular o processamento de uma compra e imprimir as seguintes mensagens
// no console:
// 1 - Compra em processamento
// 2 - Compra aprovada OU Negada (para erros)
// O programa deve tratar tanto os erros quanto os sucessos da promisse.

let saldo = false // true

function simulateCompra() {
    return new Promise((resolve, reject) => {
        if (saldo) {
            setTimeout(() => {
                resolve('compra realizada!')
            }, 2000)
        }
        else {
            setTimeout(() => {
                reject('compra negada!')
            }, 2000)
        }
    })
}

function compra() {
    console.log('*Usuario escolheu seus produtos*');

    simulateCompra()
        .then(res => console.log(res))
        .catch(err => console.log(err));

    console.log('Realizando pagamento da compra...');
}

compra()