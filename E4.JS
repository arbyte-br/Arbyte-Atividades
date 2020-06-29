var rs = require('readline-sync');

var comprar = rs.questionInt('Quantas macas deseja comprar? ');

if(comprar < 12){
    var valor = 0.30;
    var totalA = comprar * valor;
    console.log('O valor total da compra e R$ ' + `${totalA}`);
}else{
    var valor = 0.25;
    var totalB = comprar * valor;
    console.log('O valor total da compra e R$ ' + `${totalB}`);
}

//console.log("R$ " + macasUm)