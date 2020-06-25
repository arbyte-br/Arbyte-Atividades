let rs = require('readline-sync')

limite = rs.questionInt("Digite um número: ")
for (let contador; contador <= limite; contador++) {
    if (contador % 2 === 0) {
        console.log(contador)
    }
    }
