let rs=require('readline-sync');

let numero=rs.questionInt('Insira 0 para sair ou qualquer outra tela para continuar: ');

while (numero!==0)
{
    let numero=rs.questionInt('Insira 0 para sair ou qualquer outra tela para continuar: ');
    if(numero==0)
    {
        break;
    }
    console.log(numero);
}
console.log('Voce saiu');