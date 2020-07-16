// function getAge(DOB) {
//     var today = new Date();
//     var birthDate = new Date("8/17/1981");
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     var verificar = m < 0 || (m === 0 && today.getDate() < birthDate.getDate());
        
//      }return age;
// console.log(verificar)  // resultado -> 38


const dataNasc = new Date("8/17/1981");
const hoje = new Date();
const mes = hoje.getMonth() - dataNasc.getMonth();

const calculaIdade = (date) => hoje.getFullYear() - new Date(date).getFullYear();

if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())){
    console.log(calculaIdade(dataNasc) - 1);
} else{
    console.log(calculaIdade(dataNasc));
}






