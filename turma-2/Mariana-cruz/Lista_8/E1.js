// (OBRIGATÓRIO) Crie um programa que crie um objeto chamado "xicara" com as
// propriedades "cheia" (booleana) e "cor" (string) e imprima na tela. (Você pode decidir o
// valor de "cheia" e "cor", não é necessário pedir para o usuário)

var xicara = {}
xicara.cor = "Preta"
xicara.peso = "180"

var peso = "180"

if (xicara.peso === peso){
    console.log('A xícara está cheia')
}
else{
    console.log('A xícara está vazia')
}

console.log(xicara)