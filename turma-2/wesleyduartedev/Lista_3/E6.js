//(OBRIGATÓRIO) Faça um algoritmo que receba uma palavra e imprima ela ao
//contrário.
///EX: usuário informou BANANA
//Algoritmo imprime:
//ANANAB


    let a = "Wesley Duarte"
    let reverso = ""
    let int

  
    for( int b=a.length()-1 ,  b>=0  , b-- ) {
        
        reverso += String.valueOf(a.charAt(b));
        
      }
    console.log(reverso);

  

 