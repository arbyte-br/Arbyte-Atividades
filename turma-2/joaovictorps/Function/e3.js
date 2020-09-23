function retornaString(array) {
    let novaString;
    
    array.forEach(string => {
        if(novaString === undefined) {
            novaString = string
        } else {
            novaString+= ', ' + string
        }
    })
    return novaString
}

let array = ["Testando", "string", "function", "revisao", "exercicios"]

console.log(retornaString(array))