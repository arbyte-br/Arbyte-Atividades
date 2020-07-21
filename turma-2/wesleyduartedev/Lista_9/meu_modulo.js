var  readlineSync = require('readline-sync');
  let nota = [];
  let j= 0;
  let i =0
  let media =[];
  let mediana ;
  let somanotas = 0;
   var moduloClauleNotas = function(){
       console.log('Exercicio 1 Nota mediana  ------------------------------------------');
        for(i ;  i <4 ;  i ++){
        let mediana = readlineSync.questionInt('Insira 4 notas:  ');
         nota.push(mediana);

    for (j; j< nota.length ; j++){
          somanotas = somanotas + nota[j] ; 
      
    }

    
    
  }
   somanotas= somanotas / 4;
   console.log(somanotas);
  console.log( `Notas em sequencias: ${nota}`);
 
   
}
   let altura;
   let peso;
  var moduloCalculeImc = function(){
    console.log(`Exercicio 2 IMC-----------------------------------------------------`)
    const FasamImc = require('fasam-imc-calc');
    let peso = readlineSync.questionInt('Digite sua peso:  ');
    let altura = readlineSync.questionInt('Digite sua altura:  ');
    const imc = new FasamImc(peso,altura); // peso, altura
        
           console.log(imc.calc());
             // 24.69
}
  let numero;
  var moduloParouImpar = function(){
    console.log(`Exercicio 3 Par ou impar-----------------------------------------------------`)
    numero = readlineSync.questionInt('Insira um numero: ');
    const isOdd = require('is-odd');
    if (numero == 0 ){
      console.log(`O numero 0 é a definição do numero par!`);
    }  
    console.log(isOdd(numero) ? `É impar: ${numero}` : `É par: ${numero}`);

  
  }

  
  var moduloEprimo = function(){
    console.log(`Exercicio 4 É primo??-----------------------------------------------------`)
    numero = readlineSync.questionInt('Insira um numero: ');
    const isPrime = require('prime-number')
       console.log(isPrime(numero) ? `O numero é primo: ${numero}` : `O numero não é primo: ${numero}`)
  }

 var moduloSuaIdade = function (){
   console.log(`Exercicio 5 Calcule sua idade!-----------------------------------------------------`)
   //AgeFromDateString = readlineSync.questionInt('Insira sua data: ');
   let AgeFromDate = [];
    let ageFromDate = new AgeFromDate(new Date(1987, 0, 8)).age;
    console.log("value from AgeFromDate", ageFromDate);
    // output: 30 (at the time of this doc)

 }
  
 
exports.moduloSuaIdade = moduloSuaIdade;
exports.moduloEprimo = moduloEprimo;
exports.moduloParouImpar = moduloParouImpar;
exports.moduloCalculeImc = moduloCalculeImc;
exports.moduloClauleNotas = moduloClauleNotas;