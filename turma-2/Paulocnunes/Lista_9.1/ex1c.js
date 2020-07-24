// c)Declare duas vezes a mesma variável no mesmo escopo

let numero1 = 2

if (numero1 > 0) {
    let numero2 = 20
    let numero2 = 20 //SyntaxError: Identifier 'numero2' has already been declared
}
console.log(numero1*numero2)