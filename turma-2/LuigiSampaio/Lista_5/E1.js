let rs = require('readline-sync');

let input = 'abelha';
let result = '';

for(let i = 0; i < input.length; i++ ){
   
   let lt = input[i] // pode usar o charAt(i) funciona do msm jeito
    
   if(input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
        result = `${result}${lt.toUpperCase()}`
    }else{
        result = `${result}${lt}`
    }
   
}
console.log(result)  



