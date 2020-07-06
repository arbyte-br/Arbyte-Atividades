let rs = require('readline-sync')

let lista = []

for(var i=0; i<3; i++){
    lista.push(rs.questionInt("Informe um número:\n>>"))
}
lista = lista.sort(function(a, b) {
    return a - b;
  });

  console.log(lista)
