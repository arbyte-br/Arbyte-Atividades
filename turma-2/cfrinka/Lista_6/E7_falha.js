let palavra = 'compaixão';

// palavras como "conforto" não são processadas no código. ISSO É UM PROBLEMA

if (palavra.includes('mp') || palavra.includes('mb')){
    console.log('A palavra está correta')
}
else {
    console.log('A palavra está errada')
}