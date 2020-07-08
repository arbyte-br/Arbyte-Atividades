let rs = require('readline-sync');

let sexo = rs.questionInt('Informe qual e o seu sexo digitando 1 - para Feminino ou 2 - para Masculino ')
let altura = rs.questionInt('Qual sua altura ')


if (sexo === 1)
{
    let resultado = (62.1*altura);
    console.log(`calculo e ${resultado}`);

}

if( sexo === 2){
    let resultado = (72.7*altura);
    console.log(`calculo e ${resultado}`);
}

else console.log("Sexo invalido")

    