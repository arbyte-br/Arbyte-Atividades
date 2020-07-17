const readline = require('readline-sync');

let DOB = readline.question('Insira a Data de seu aniversario ');

/*function getAge(DOB) {
    var today = new Date(); // today = hoje
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    return age;
}
console.log(getAge(DOB)) // resultado ->38*/

const idade = (DOB) => {
    let today = new Date();
    let birthDate = new Date(DOB);
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    return age;
} 
console.log(`Idade: ${idade(DOB)} anos`);