let rs= require('readline-sync')
//Entrada de dados do usuário
let Entrada=rs.questionInt("Digite até onde quer que seja mostrado a sequência de  números pares: ")
//Calculando os números pares
let Num = 1, msg = "";
while (Num <= Entrada) {
    if (Num % 2 === 0) {
        if (Num === Entrada){
            msg += Num + ". ";
        }else{
            msg += Num + ", ";
        }
    }
    Num++;
}
console.log(msg);