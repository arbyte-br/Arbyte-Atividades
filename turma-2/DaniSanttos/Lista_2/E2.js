let rs = require('readline-sync')

let conversao = rs.questionInt('Qual conversão você deseja fazer?\nSe for de Ceusius para Fahrenheit digite 1, se for ao contrario digite 2: ')

if (conversao === 1){
    let celsius = rs.questionFloat('Digite quantos graus em Celsius: ')
    conversao = ((celsius * 9) / 5) + 32
    console.log(`A temperatura em Farenheit é de ${conversao}°F`)
}else if (conversao === 2){
    let fahrenheit = rs.questionFloat('Digite quantos graus em Fahrenheit: ')
    conversao = ((fahrenheit - 32) * 5)/9
    console.log(`A temperatura em Celsius é de ${conversao}°C`)
}else{
    console.log('Opção inválida.')
}