var rs = require('readline-sync');
// Lados do poligono
var lados = rs.questionInt('Quantos lados possui o poligono regular? : ');
// Centimetros (cm)
var centimetros = rs.questionInt('Quantos cm possui o poligono? : ');
// Condição
if(lados == '3'){
    console.log('TRIANGULO ' + '(' + centimetros * lados + 'cm)' + 'cm é a sua área total!');
}else if(lados == '4'){
    console.log('QUADRADO ' + '(' + centimetros * lados+ 'cm)' + ' é a sua área total');
}else if(lados == '5'){
    console.log('PENTÁGONO ' + '(' + centimetros * lados + 'cm)' + ' é a sua área total!')
}else{
    console.log('Desculpe mas nao foi possivel calcular!')
}