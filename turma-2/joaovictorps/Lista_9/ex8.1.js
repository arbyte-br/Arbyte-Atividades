function concatenar(...array) {
    let somados = []
    for(let i = 0;i < array.length;i++) {
        somados.push(...array[i])
    }
    return somados
}

let array1 = [1,2,3]
let array2 = [4,9,6]

console.log(concatenar(array1,array2))