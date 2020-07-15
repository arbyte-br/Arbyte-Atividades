// Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja
// negativo, imprimindo o resultado.

let numero = -10

if(numero > 0){
    let dobro = numero * 2
    console.log(dobro)
} else if(numero < 0){
    let triplo = numero * 3
    console.log(triplo)
}else{
    console.log('Zero é Zero')
}
