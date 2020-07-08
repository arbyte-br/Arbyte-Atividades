let n = 3

let soma = 0

while(n <= 1000){
    if(n%3 === 0 || n%5 === 0){
        soma = soma + n
    }n++
} 
console.log(soma);