let rs = require('readline-sync')

let idade = rs.questionInt('Digite sua idade: ')

if (idade < 16) {
    console.log(`Prepare-se jovem em breve você poderá exercer seu direito de voto`)
} else if ((idade >= 16) && (idade < 18)) {
    console.log(`Prepare-se jovem, por enquanto seu voto é facultativo`)
} else if ((idade >=18) && (idade < 69)) {
    console.log(`Atenção prepare seu titulo de eleitor, com sua idade (${idade}) seu voto é obrigatório`)
} else {
    console.log(`Obrigado sr(a) por todos esses anos exercendo seu direito de cidadão, com sua idade atual(${idade}) seu voto é facultativo.`)
}