let rs = require('readline-sync');
 let maca = rs.question('Quantas macas voce deseja? \n');

 if (maca>=12){
     let atacado = (maca*0,25);
    console.log(atacado)
 }
else{
    let varejo =(maca*0,3);
    console.log(varejo)
};