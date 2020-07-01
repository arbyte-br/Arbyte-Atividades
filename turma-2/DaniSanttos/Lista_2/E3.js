let rs = require('readline-sync')

let ddi = rs.questionInt('Digite o DDI para saber a localidade que ele corresponde: ')

if (ddi === 1){
    console.log('Esse DDI corresponde aos Estados Unidos.')
}else if (ddi === 55){
    console.log('Esse DDI corresponde ao Brasil.')
}else if(ddi === 49){
    console.log('Esse DDI corresponde a Alemanha.')
}else if(ddi === 49){
    console.log('Esse DDI corresponde a Argentina.')
}else if(ddi === 35){
    console.log('Esse DDI correponde a Portugal.')
}else{
    console.log('Esse DDI não esta cadastrado no nosso sistema.')
}