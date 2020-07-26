let valor1 = 0
let valor2 = 1000
let multiplo = 0

while(valor1 <= valor2){
    if (valor1 % 3 == 0 && valor1 % 5 == 0){
        multiplo = multiplo + valor1
}
    valor1++
}
console.log(multiplo)