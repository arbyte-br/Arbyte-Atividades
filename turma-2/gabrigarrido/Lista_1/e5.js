var rs = require("readline-sync")
var pergunta01 = rs.question("Digite um valor inteiro: ")
var pergunta02 = rs.question("Digite outro valor inteiro: ")
var pergunta03 = rs.question("Digite o último valor inteiro: ")

if (pergunta01 == pergunta02 || pergunta01 == pergunta03 || pergunta02 == pergunta03){
    console.log("Os numeros devem ser difentes entre si!")
}else if(pergunta01 > pergunta02  && pergunta02 > pergunta03){
    console.log("A sequência crescente é " + pergunta03, pergunta02 ,pergunta01)
}else if(pergunta01 > pergunta03 &&  pergunta03 > pergunta02){
    console.log("A sequência crescente é " + pergunta02, pergunta03, pergunta01)
}else if(pergunta02 > pergunta03 &&  pergunta03 > pergunta01){
    console.log("A sequência crescente é " + pergunta01, pergunta03, pergunta02)
}else if(pergunta02 > pergunta01 &&  pergunta01 > pergunta03){
    console.log("A sequência crescente é " + pergunta03, pergunta01, pergunta02)
}else if(pergunta03 > pergunta02 &&  pergunta02 > pergunta01){
    console.log("A sequência crescente é " + pergunta01, pergunta02, pergunta03)
}else console.log("A sequência crescente é " + pergunta02, pergunta01, pergunta03)