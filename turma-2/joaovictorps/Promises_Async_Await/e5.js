async function sorteio(ms, numero) {
    console.log(`Sorteando um número de 0 até ${numero}...`)
    return new Promise (resolve => 
        setTimeout(() => {
            resolve(Math.floor(Math.random() * numero))
        }, ms))
}

async function sorteandoNumero() {
    let numero = await sorteio(3000, 1000)
    console.log(numero)
}

sorteandoNumero()