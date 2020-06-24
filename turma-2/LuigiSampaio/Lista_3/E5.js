let rs = require('readline-sync');

let valor = rs.questionInt('insira 0 Para Sair Ou qlq outra tecla para continuar: ');


while(valor != 0){
    let valor = rs.questionInt('insira 0 Para Sair Ou qlq outra tecla para continuar: ');
    if(valor === 0){
        console.log('Saindo');
        break;
    }
}
