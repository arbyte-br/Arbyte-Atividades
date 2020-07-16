let rs = require ('readline-sync')

let respostaUsuario = rs.questionFloat(console.log('Digite um número maior que 0: '))
let contador = 1
let asteristico = '*'

if (respostaUsuario > 0) {
    while(contador <= respostaUsuario){
    console.log(asteristico.repeat(contador))

    contador++
    }
} else {
    console.log('Número precisa ser maior que 0.')
}