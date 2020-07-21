const readline = require('readline-sync');

let idade = readline.question('Insira a Data de seu aniversario ');

getAge(idade)
const getAge = (DOB) => {
    let today = 2020;
    let birthDate = DOB
    let age = today-birthDate
    console.log(age)
    
}

