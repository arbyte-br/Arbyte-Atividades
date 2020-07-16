let rs=require('readline-sync')

let nome1= rs.question ('Qual teu Nome?')
let dia1= rs.question ('Qual seu dia de nascimento no formato ?')
let mes1= rs.question ('Qual seu mês de nascimento no formato ?')
let ano1= rs.question ('Qual seu ano de nascimento no formato ?')

let nome2= rs.question ('Qual teu Nome?')
let dia2= rs.question ('Qual seu dia de nascimento no formato ?')
let mes2= rs.question ('Qual seu mês de nascimento no formato ?')
let ano2= rs.question ('Qual seu ano de nascimento no formato ?')

let dataAtualdia= 09
let dataAtualmes= 07
let dataAtualano= 2020
let idade=-1

let nascimento1= `${dia1}/${mes1}/${ano1}`
let nascimento2= `${dia2}/${mes2}/${ano2}`

for(i=ano1; i<=dataAtualano; i++){
    
    if(dataAtualano==i){
        if(mes1<dataAtualmes){
            idade++
        }
        else if (mes1==dataAtualmes){
            if(dataAtualdia<dia1){
                idade++
            }
        }
    }
    else{
        idade++
    }
    
}

for(i=ano2; i<=dataAtualano; i++){
    
    if(dataAtualano==i){
        if(mes2<dataAtualmes){
            idade++
        }
        else if (mes2==dataAtualmes){
            if(dataAtualdia<dia1){
                idade++
            }
        }
    }
    else{
        idade++
    }
    
}

var usuario1={
    nome:nome1,
    idade:idade,
    nascimento:nascimento1,

}

var usuario2={
    nome:nome1,
    idade:idade,
    nascimento:nascimento2,

}

if(usuario1.idade>usuario2.idade){
    console.log(`O usuário ${nome1} é mais velho que o usuário ${nome2}`)
}else{
    console.log(`O usuário ${nome2} é mais velho que o usuário ${nome1}`)
}