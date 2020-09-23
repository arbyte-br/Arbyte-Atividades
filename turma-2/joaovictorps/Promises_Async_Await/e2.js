function inverterString(string) {
    return new Promise ((resolve, reject) =>{
        let stringReverse = string.split('').reverse().join('')
        resolve(stringReverse)
    })
}

inverterString('João')
    .then(res => console.log(res))
    .catch( err =>  console.log(err))