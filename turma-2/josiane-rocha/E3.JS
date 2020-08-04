let saldo = false // true

function simulateCompra() {
    return new Promise((resolve, reject) => {
        if (saldo) {
            setTimeout(() => {
                resolve('compra realizada!')
            }, 4000)
        }
        else {
            setTimeout(() => {
                reject('compra negada!')
            }, 4000)
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