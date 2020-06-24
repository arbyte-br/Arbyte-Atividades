let rs=require('readline-sync');

let opcao=rs.question('Insira A ou B: ');
let result=0;

while (opcao=='b' || opcao=='B')
{
    let n1=rs.questionInt('Insira um numero: ');
    let n2=rs.questionInt('Insira outro numero: ');
    result= n1+n2;
    console.log('A soma dos dois numeros digitados eh: '+result);
    opcao=rs.question('Digite B se quiser somar dois numeros de novo ou A para sair: ');
    if (opcao!=='a' && opcao!=='b');
    {
        break;
    }
}
console.log('Voce saiu do loop while');

