//Peça o nome de 1 usuário;
//Peça a sua data de nascimento no formato DD/MM/AAA
//Com base na data de nascimento, calcule sua idade (a data de hoje você mesmo pode definir em uma variável);
// Imprima na tela a idade do usuário.

let rs=require('readline-sync')

let nome= rs.question ('Qual teu Nome?')
let dia= rs.question ('Qual seu dia de nascimento no formato ?')
let mes= rs.question ('Qual seu mês de nascimento no formato ?')
let ano= rs.question ('Qual seu ano de nascimento no formato ?')

let dataAtualdia= 09
let dataAtualmes= 07
let dataAtualano= 2020
let idade=-1

let nascimento= `${dia}/${mes}/${ano}`

for(i=ano; i<=dataAtualano; i++){
    
    if(dataAtualano==i){
        if(mes<dataAtualmes){
            idade++
        }
        else if (mes==dataAtualmes){
            if(dataAtualdia<dia){
                idade++
            }
        }
    }
    else{
        idade++
    }
    
}

var usuario={
    nome:nome,
    idade:idade,
    nascimento:nascimento,

}

console.log(usuario)
