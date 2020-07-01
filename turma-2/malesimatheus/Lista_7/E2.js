function numeroPrimo(numero) {
    let divisiveis = [];
    for(let i = 1; i <= numero; i ++) {
        if(numero % i == 0) {
            divisiveis.push(i);
        }
    }
    (divisiveis.length == 2) ? console.log('É número primo') : console.log('Não é número primo');
}

numeroPrimo(89);