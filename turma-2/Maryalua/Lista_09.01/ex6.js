//Refatore a função abaixo utilizando ecmaScript 6 com arrow functions
//e as melhores abordagens de programação:

const getAge = (DOB) => {
    let today = new Date();
    let birthDate = new Date(DOB);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    return age;
}
console.log(getAge("8/17/1981")) // resultado -> 38


