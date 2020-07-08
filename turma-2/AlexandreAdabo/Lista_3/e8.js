let rs = require('readline-sync')

let escolha = rs.question('Escolha A ou B: ')

while(escolha.toUpperCase() !== 'A'){
    escolha = rs.question('Escolha A ou B: ')
    if(escolha.toUpperCase() === 'B'){
        let num1 = rs.questionFloat('Digite um numero: ')
        let num2 = rs.questionFloat('Digite outro numero: ')
        let soma = num1 + num2
       console.log('A soma dos dois numeros é: ', soma, 'Deseja fazer mais alguma operacao ? ')
    }
}
    
