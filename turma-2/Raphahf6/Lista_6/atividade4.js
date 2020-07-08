let rs = require('readline-sync')




let consoantes = ['b', 'c', 'd', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
let questao = rs.question('Digite alguma palavra: ')
var contarVogais = function() {
    for (i = 0; i < questao.length; i++ ) {
        
        var totalVogal = 0;
        var vogais = ['a', 'e', 'i', 'o', 'u'];
        
        if(vogais.indexOf(questao[i]) !== -1){
            totalVogal++
            console.log(totalVogal)

        }
    }
}
