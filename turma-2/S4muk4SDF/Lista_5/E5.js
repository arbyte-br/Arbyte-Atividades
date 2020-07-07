let rs = require("readline-sync")


let perguntaUsuario = rs.question("Gostaria de calcular o fatorial de qual número? !")

let resultado = perguntaUsuario

for (let i = 1; i < perguntaUsuario; i++) {
    resultado = resultado * i
    
    
}

console.log('Resultado: ', resultado);

