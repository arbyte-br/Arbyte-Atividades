let rs=require('readline-sync')

let nome= rs.question ('Qual teu Nome?')

let listanumeros=[]

for(i=0;i<3;i++){
    let numero= rs.question('Escolha um número')
    listanumeros.push(numero)
}

let objeto={nome:nome, lista:listanumeros}
console.log(objeto)