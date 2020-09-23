function deixarMaiusculo(string) {
    return new Promise ((resolve, reject) => {
        let newString = string.toUpperCase()
        resolve(newString)
    })
}

deixarMaiusculo('João')
    .then(res => console.log(res))
    .catch( err =>  console.log(err))