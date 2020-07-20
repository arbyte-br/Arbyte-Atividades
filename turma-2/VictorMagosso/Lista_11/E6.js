let today = new Date()
let birthDate = new Date();

const getAge = DOB => birthDate = new Date(DOB)

let age = today.getFullYear() - birthDate.getFullYear()
let m = today.getMonth() - birthDate.getMonth()

if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()){
    age = age - 1
}
//não entendi porque não está lendo a idade
console.log(getAge("8/17/2000"))

