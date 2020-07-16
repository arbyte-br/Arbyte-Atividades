//Faça um programa que receba uma palavra e verifica se a palavra está cometendo o seguinte erro de português Antes de “p” ou “b” devemos usar M. Caso a palavra esteja errada informar o erro, Se não dizer que a palavra está certa. Utilize o método ​includes()

let rs = require('readline-sync')

let palavra = rs.question('Digite uma palavra: ')

if (palavra.includes('np','nb','NP','NB')) {
    console.log(('Essa palavra está escrita de maneira incorreta, corrija colocando a letra M antes da letra P ou da letra B.'))
}
    else {
        console.log('Parabéns, você escreveu da maneira correta!')
    }