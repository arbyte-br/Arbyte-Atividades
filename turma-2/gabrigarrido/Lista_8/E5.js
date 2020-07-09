var rs = require('readline-sync');

var nomeUsuario = rs.question("Qual é o seu nome? \n")
var objeto = new Object()
var arrayNumeros = new Array()

function criarObjeto(nome){
    
    for(i = 0; i < 3; i++){
        let numeroEscolhidos = rs.questionInt("Por favor, informe um número!! \n")
        if(numeroEscolhidos == 0){
            console.log("Informe um numero acima de 0 !")
            i--
        } else{
            arrayNumeros.push(numeroEscolhidos)
        }
    
    }

    objeto.nome = nomeUsuario
    objeto.numero = arrayNumeros
    

}

while(nomeUsuario == ''){
    console.log("É necessario digitar o nome!")
    var nomeUsuario = rs.question("Qual é o seu nome? \n")
    
}


criarObjeto(nomeUsuario);
console.log(objeto)




// function criarObjeto(nome){
    
//     for(i = 0; i < 4; i++){
//         let numeroEscolhidos = rs.questionInt("Por favor, informe um número!! \n")
//         if(numeroEscolhidos == 0){
//             console.log("Informe um numero acima de 0 !")
//         } else{
//             arrayNumeros.push(numeroEscolhidos)
//             i++
//         }
        
//     }

//     objeto.nome = nomeUsuario
//     objeto.numero = arrayNumeros

// }

// while(nomeUsuario == ''){
//     console.log("É necessario digitar o nome!")
//     var nomeUsuario = rs.question("Qual é o seu nome? \n")
    
// }


// criarObjeto(nomeUsuario);
// console.log(objeto)

