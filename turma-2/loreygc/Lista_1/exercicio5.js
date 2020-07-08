let rs=require("readline-sync")

//definindo os números

let n1 = rs.questionInt("Insira o primeiro valor: ")
let n2 = rs.questionInt("Insira o segundo valor: ")
let n3 = rs.questionInt('Insira o terceiro valor: ')

//comparando valores

if ((n1 > n2) && (n1 > n3)) {
    maior = n1;
    if (n2 < n3) {
        meio = n3
        menor = n2
    }
    else   {
        meio = n2
        menor = n3
    }


}
else if ((n2 > n1) && (n2 > n3)) {
    maior = n2;
    if (n1 < n3) {
        meio = n3
        menor = n1   }
        else {   {
            meio = n1
            menor = n3
        }
    }
    
    }
    console.log(menor, meio, maior)