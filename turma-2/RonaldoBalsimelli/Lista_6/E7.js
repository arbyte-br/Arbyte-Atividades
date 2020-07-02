let rs = require('readline-sync');

let palavra = rs.question('insira uma palavra: \n');

if (palavra.includes('mp') || palavra.includes('mb')) {
    console.log('Muito bom! Seu português está afiado!')
} else if (palavra.includes('np') || palavra.includes('nb')) {
    console.log('Não Jovem, antes de "P" e "B", usa-se o "M", tenta de novo ')
} 