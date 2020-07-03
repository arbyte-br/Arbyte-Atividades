let rs = require ('readline-sync');


let palavra = rs.question('ESCREVA ALGO =   ').toLowerCase();
let resultado = '';

for(let i =0; i<=palavra.length; i++){

    

    let vogais = palavra.charAt(i);

    if (vogais == 'a' || vogais == 'e' || vogais == 'i'  || vogais == 'o' || vogais == 'u'){

        vogais = vogais.toUpperCase()
            
     } 
     resultado = resultado + vogais;
    
}


console.log(resultado);
