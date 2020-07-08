let palavra = 'ABELHA';
palavra = palavra.toLocaleLowerCase();
let a = 'a';
let e = 'e';
let i = 'i';
let o = 'o';
let u = 'u';
let contador = 0;
let finalLoop = palavra.length;
let resultado = '';
for(contador; contador < finalLoop; contador++) {
    let expressao = palavra.charAt(contador);
    let isVogal = expressao === a || expressao === e || expressao === i || expressao === o || expressao === u;
    if(isVogal) {
        resultado = `${resultado}${expressao.toUpperCase()}`;
    }
    if(!isVogal) {
        resultado = `${resultado}${expressao}`;
    }
}
console.log(resultado);