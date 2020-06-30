//Faça um algoritmo que receba uma entrada do usuário e caso encontre ​uma vogal​ transforme ela 
//em maiúscula (obrigatório usar FOR)EX: abelhaO algoritmo imprimeAbElhA

let rs=require("readline-sync")
let pg

for(let pg; pg !== "nao"; null){
    
let palavra = rs.question("Digite qualquer palavra!\n").toLowerCase()
let tamanho = palavra.length
    
    for(let i=0;i<tamanho;i++){
        if(palavra.charAt(i) === "a"||palavra.charAt(i) === "e"||palavra.charAt(i) === "i"||palavra.charAt(i) === "o"||palavra.charAt(i) === "u"){
            console.log(palavra.charAt(i).toUpperCase().slice(palavra))
        }else{
            console.log(palavra.charAt(i))
        }
    }
    pg = rs.question("Voce gostaria de ver as vogais de uma nova em palavra maiusculas?(Responda com sim ou nao)").toLowerCase()
  
}
