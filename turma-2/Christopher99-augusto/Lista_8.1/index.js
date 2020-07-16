let rs = require('readline-sync')

let usuario1 = {
    
    nome: null,
    
    numero: null
}

let usuario2 = {
    
    nome: null,
    
    numero: null
}

usuario1.nome = rs.question('Digite o nome do Usuário nº 1: ')

usuario1.numero = rs.question(`${usuario1.nome} por favor, digite um número: `)

usuario2.nome = rs.question('Digite o nome do usuário nº 2: ')

usuario2.numero = rs.question(`${usuario2.nome} por favor, digite um número: `)

if (usuario1.numero > usuario2.numero){
    
    console.log(`O usuário ${usuario1.nome} inseriu um número maior.`)
}
else{
   
    console.log(`O usuário ${usuario2.nome} inseriu um número maior.`)
}