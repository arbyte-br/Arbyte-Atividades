//3 - Faça um algoritmo que solicite ao usuário A ou B Caso o usuário escolha A O algoritmo
//deve imprimir toda informação do carro com maior aceleração Caso o usuário escolha B O
//algoritmo deve imprimir toda informação do carro com maior potência


let rs = require('readline-sync');
const carros = require('./cars.json')

function maiorAceleracao(){
    let carroComMaiorAceleracao;
    let ultimaAceleracao = 0;

    carros.forEach((car) =>{

        if (carros.Acceleration > ultimaAceleracao){
            console.log('Carro com maior aceleração encontrado!' (""+ (carros.Acceleration)))
          ultimaAceleracao = carros.Acceleration ;
          carroComMaiorAceleracao = carros;
        } else {
            console.log("Esse carro tem aceleração inferior" ("" +(carros.Acceleration)));
        }

       

    })
   
    console.log(carroComMaiorAceleracao);


}




function maiorPotencia(){
    let carroCommaiorPotencia;
    let ultimaPotencia = 0;


    
}

let opcao = rs.question(" A - Maior Aceleracao \N B- Maior potencia \n C-Sair \n");

if (opcao == "A") {
    console.log(maiorAceleracao);
} else {
  if(opcao == "B"){
        console.log(maiorPotencia)
   }
}

console.log('O  USUARIO ESCOLHEU A OPÇÃO ' + opcao);







