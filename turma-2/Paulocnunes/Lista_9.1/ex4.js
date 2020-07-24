//(Obrigatório) Use o spread operator para transformar as três variáveis abaixo em um só objeto igual a
// { a: '​a​', b: '​b​', c: '​c​', d: '​d​', e: '​e​' }
// const ​​obj ​​=​ { 
    // a​:​ '​a​', 
    // b​:​ '​b​', 
    // c​:​ '​c​',
// }
// const​​d ​​=​ '​d​'
// const​​e​​ =​ '​e​'

let abc = {
    a: 'a',
    b: 'b',
    c: 'c'
}

let d = 'd'

let e = 'e'

let abcde = {
    ...abc,
    d,
    e
}

console.log(abcde)
