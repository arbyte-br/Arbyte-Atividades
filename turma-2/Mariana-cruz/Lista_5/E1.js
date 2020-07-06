let rs = require('readline-sync')

console.log('Insira qualquer palavra:');
let respostaUsuario = rs.question('');

for (let i = 0; i < respostaUsuario.length; i++){

    if(respostaUsuario.charAt(i) == 'a'){
        console.log('>> '+ respostaUsuario.charAt(i).toUpperCase());
    }
        
    else if(respostaUsuario.charAt(i) == 'e'){
        console.log('>> '+ respostaUsuario.charAt(i).toUpperCase());
    }  
    
    else if(respostaUsuario.charAt(i) == 'i'){
        console.log('>> '+ respostaUsuario.charAt(i).toUpperCase());
    }    

    else if(respostaUsuario.charAt(i) == 'o'){
        console.log('>> '+ respostaUsuario.charAt(i).toUpperCase());
    }    

    else if(respostaUsuario.charAt(i) == 'u'){
        console.log('>> '+ respostaUsuario.charAt(i).toUpperCase());
    }    

    else{
        console.log('>> '+ respostaUsuario.charAt(i).toLowerCase());
    }

}

