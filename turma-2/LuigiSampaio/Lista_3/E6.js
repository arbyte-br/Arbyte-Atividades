let rs = require('readline-sync');


let nome = rs.question('insira alguma coisa: ');

function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  }

  console.log(reverseString(nome))




