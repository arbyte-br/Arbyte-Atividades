//(OBRIGATÓRIO) Faça uma função que recebe por parâmetro o raio de uma esfera e
//calcula o seu volume (v = 4/3.pi.R 3 ).
//Então solicite ao usuário o raio da esfera e utilize a função para exibir o resultado.

let rs=require('readline-sync');

let numero=rs.question('Insirao o volume : ');

function calcularVolume(numero){
      
            let volume = (4/3) * Math.PI * Math.pow(numero, 3);
            return volume
       
}

 console.log(calcularVolume(numero));
 
   

     