let rs = require('readline-sync')

let userText = rs.question("Por favor digite uma frase: \n")
userText = userText.toLocaleLowerCase()
let tamanho = userText.length

for(let i = 0; i < tamanho; i++) {
    if (userText.charAt(i) === 'a' || userText.charAt(i) === 'e' || userText.charAt(i) === 'i' || userText.charAt(i) === 'o' || userText.charAt(i) === 'u'){
        console.log(userText.charAt(i).toUpperCase())    
}   else {
        console.log(userText.charAt(i))
}
}