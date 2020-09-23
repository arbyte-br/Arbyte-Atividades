function adicionaString(string) {
    return new Promise((resolve, reject) => {
        resolve(`${string} Arbyte`)
    })
}

adicionaString('João')
    .then(res => console.log(res))
    .catch( err =>  console.log(err))