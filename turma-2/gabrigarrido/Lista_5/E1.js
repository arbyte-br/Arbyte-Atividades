 /* Exercicio 01*/
 
  var rs = require("readline-sync")
  
 
  var palavra = rs.question("Escreva uma palavra");
  //pergunta.charAt(())
  var size = palavra.length;
  var palavraReservada = "";

 for(var i = 0; i < size; i++){
     var letra = palavra.charAt(i);
     console.log(letra)
     if(letra == "a"){
        palavraReservada = palavraReservada + letra.toUpperCase(); // Mesma coisa que palavraReservada += letra.toUpperCase();
     }else{
       palavraReservada+= letra;
     }
     
 }

 console.log(palavraReservada);


