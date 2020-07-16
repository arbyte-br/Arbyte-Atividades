//(OBRIGATÓRIO) Faça um algoritmo que receba uma entrada do usuário e caso
//encontre uma vogal transforme ela em maiúscula (obrigatório usar FOR)
//EX: abelha
//O algoritmo imprime
//AbElhA
//Dicas para esta atividade.
//Para selecionar 1 caracter da string utilizamos a função charAt :
//var nome = “oi”
//console.log(nome.charAt(0))
//console.log(nome.charAt(1))
//O algoritmo imprime:
//> o
//> i
//O número que colocamos dentro de charAt é a posição do caractere que queremos da
//string. Lembrando que o primeiro elemento é 0 e não 1.
//Sendo assim, uma string de 2 elementos possui os elementos 0 e 1.
//Para cada charAt você deve concatenar isto numa string separada e exibir ela no final




   var  readlineSync = require('readline-sync');

   var palavra = readlineSync.question('Insira uma palavra:');


    
    var tamanhopalavra = palavra.length
    var i = 0
    
    
         for ( i= 0 ;i <tamanhopalavra.length ; i = i + 1  ) {
               if (palavra.charAt(i)  == 'a' || palavra.charAt(i) == 'e' ||  palavra.charAt(i) =='i' ||  palavra.charAt(i) == "o" ||  palavra.charAt(x) == "u ") {
                   console.log( palavra.charAt(i).toUpperCase());
                    
               }
                
                 else 
                        console.log(palavra.charAt(i));
                        console.log(palavra);

            }
            
                    
                     
                   

               
                
               
        
              
               
               



         
         
   
      
  