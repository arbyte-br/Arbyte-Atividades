let rs = require('readline-sync');


for (let i=0; i<5; i++) 
{
    let nome = rs.question('Insira seu nome: ');
    let n1 = rs.questionFloat('Insira primeira nota: ');
    let n2 = rs.questionFloat('Insira segunda nota: ');
    n1=n1*0.3;
    n2=n2*0.7;
    let media=n1+n2;
    console.log('A média do '+nome+' é de '+media); 
}
