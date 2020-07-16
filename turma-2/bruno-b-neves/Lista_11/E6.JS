const getAge = (DOB) => {
    let today = new Date();
    let birthDate = new Date(DOB);

    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();

    if (m <= 0) {
        age = age -1
    } 
    
    else if (today.getDate() < birthDate.getDate()) {
        age = age - 1;
    } 
    
    else {
        console.log('Erro');
    }
    return age;
}
console.log(getAge('8/17/1981'))