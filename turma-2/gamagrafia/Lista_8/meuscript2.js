
let rs=require('readline-sync')

let pergunta= rs.question('A xicara está cheia?')

function estaCheio(copo){
    if (copo.toUpperCase()==="SIM"){
        return true
    }else{
        return false
    }
}

let xicara ={cheia: estaCheio(pergunta), cor: "vermelho"}
console.log (xicara)