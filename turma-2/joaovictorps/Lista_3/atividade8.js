let rs = require('readline-sync')

let pergunta1 = rs.question(console.log('Você têm duas opções, A e B. A encerra o programa e B faz uma soma, oque gostaria de fazer ? \n'))

let n1 = 0
let n2 = 0
let resultado = 0


while(pergunta1 != "A" && pergunta1 != "B") {
        pergunta1 = rs.question(console.log('Não inseriu um valor válido. Por favor, digite A ou B.'))
}
        
while(pergunta1 === "B"){
    n1 = rs.questionInt(console.log('Digite um número: '))
    n2 = rs.questionInt(console.log('Digite outro número: '))
    resultado = n1 + n2
    console.log('A soma de '+ n1 +' e '+ n2 +' é '+ resultado +'.')
    pergunta1 = rs.question('Deseja fazer outro cálculo ?')
    while(pergunta1 != "A" && pergunta1 != "B") {
        pergunta1 = rs.question(console.log('Não inseriu um valor válido. Por favor, digite A ou B.'))
}
}

 




