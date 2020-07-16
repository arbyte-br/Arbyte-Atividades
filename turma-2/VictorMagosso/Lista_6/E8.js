let rs = require('readline-sync')

let palavra = rs.question('Digite algo: ')

let vogais = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < 4; i++) {
        if (palavra.includes(vogais[i])){
            console.log('Possui vogais')
            break
    }else{
        console.log('Não possui vogais')
        break
    }
}