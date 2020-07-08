let rs = require('readline-sync')
let question = rs.question('Digite uma palavra: ')


for (let i = 0; i < question.length; i++) {
    
    let vogal = ['a','e', 'i','o','u']
    let vogal1 = question.charAt([vogal]).toUpperCase()
    
  
    console.log(vogal1)
} 
