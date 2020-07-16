var rs = require('readline-sync')
var ageCalculator = require('age-calculator')
let {AgeFromDateString, AgeFromDate} = require('age-calculator');


function calcularIdade(){
    let dia = rs.questionInt("Por favor, informe o dia do seu nascimento: ")
    let mes = rs.questionInt("Por favor, informe o mês do seu nascimento: ") -1
    let ano = rs.questionInt("Por favor, informe o ano do seu nascimento: ")
    //    mesCorreto = mes - 1

    console.log(dia)
    console.log(mes)
    console.log(ano)


    let calculoIdade = new AgeFromDate(new Date(ano, mes, dia)).age;
    console.log(calculoIdade)
    console.log("Você possui "+calculoIdade+" anos de idade!!")

} 

calcularIdade()



// const rs = require('readline-sync')
// const ageCalculator = require('age-calculator')
// const chalk = require('chalk')

