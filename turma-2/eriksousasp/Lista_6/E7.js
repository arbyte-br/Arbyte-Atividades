let rs = require('readline-sync');

let palavra = rs.question('Digite qualquer palavra: ');

let erros = 0;

if (palavra.includes('p') || palavra.includes('b')) {
    for (let i = 0; i < palavra.length; i++) {
        let letra = palavra.charAt(i);
        if (letra == 'p' || letra == 'b') {
            if (palavra.charAt(i - 1) == 'n') {
                erros = erros + 1;
            }
        }
    }
}

(erros > 0) ? console.log('Não se esqueça, antes do P e do B, vem o M '): console.log('Você digitou corretamente!');