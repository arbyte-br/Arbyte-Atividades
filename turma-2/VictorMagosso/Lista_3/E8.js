let rs = require('readline-sync')

let decisao
while(decisao != 0){
    let pergunta = rs.question('Digite A para encerrar o programa ou B para realizar uma conta matematica: ').toUpperCase()
    
    if(pergunta === "A"){
    console.log('Programa sendo finalizado.')
        break
    }else if (pergunta === "B"){
        let n1 = rs.questionFloat('Digite o primeiro numero: ')
        console.log("=======================")
        let n2 = rs.questionFloat('Digite o segundo numero: ')
        console.log("=======================")
        console.log(`${n1} + ${n2} é igual a ${n1+n2}`)
        break
    }else{
        console.log("Valor invalido. Digite A ou B")
    }
}
console.log('=======================')
