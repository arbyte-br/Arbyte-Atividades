let rs = require('readline-sync')

let tamanhoList = 5
let nomeJogador1 =rs.question('Digite o nome do Jogador 1: ')
let nomeJogador2 =rs.question('Digite o nome do Jogador 2: ')
        console.clear()
let listJogador1 =[]

    for(let i = 0; i < tamanhoList; i++){
        let respostaJogador = -1
    while(respostaJogador < 0 || respostaJogador > 10){
        respostaJogador = rs.questionInt(`Digite um número entre 0 e 10, ${nomeJogador1}: `)
    }   
    listJogador1.push(respostaJogador)    
}
        console.clear()
let listJogador2=[]

    for(let i = 0; i < tamanhoList; i++){
        let respostaJogador = -1
    while(respostaJogador < 0 || respostaJogador >10) {
        respostaJogador = rs.questionInt(`digite um número entre 0 e 10, ${nomeJogador2}: `)
    }
    listJogador2.push(respostaJogador)
}
        console.clear()
let numerosRepetidos = []

    for(let i = 0; i < tamanhoList; i++){
        let itemList1 = listJogador1[i]
        for(let j = 0; j < tamanhoList; j++){
            let itemList2 = listJogador2[j]
            let AchouNumeroRepetido = itemList1 === itemList2
            if(AchouNumeroRepetido){
                let naoEstaNaLista = !numerosRepetidos.includes(itemList1)
                if (naoEstaNaLista){
                    numerosRepetidos.push(itemList1)
                }
            }
        }
    }
                 console.clear()
    console.log(`${nomeJogador1}, seus números são: ${listJogador1}`)
    console.log(`${nomeJogador2}, seus números são: ${listJogador2}`)

    console.log('Estes são os números repetidos: ', numerosRepetidos.join(', '))


