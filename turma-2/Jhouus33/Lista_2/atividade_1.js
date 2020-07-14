// Faça um programa que leia o valor de um produto X e
// leia a quantidade de reais de um cofrinho que contenha: 
// a. N moedas de 1 real;  
// b. N moedas de 50 centavos; 
// c. N moedas de 25 centavos;  
// d. N moedas de 10 centavos;
// e. N moedas de 5 centavos; 
// f. N moedas de 1 centavos. 

// O programa deverá verificar se o total de reais que contém no cofrinho é o
// bastante para compra o produto X e imprimir se possui ou não valor suficiente
 

let rs = require('readline-sync')

let precoProduto = rs.questionInt('Digite o valor do produto: \n')
let soma = 0

let moedasDe100 = rs.questionInt('Digite o valor do total de moedas de 1 real: \n')
let moedasDe50 = rs.questionInt('Digite o valor do total de moedas de 50 centavos: \n')
let moedasDe25 = rs.questionInt('Digite o valor do total de moedas de 25 centavos: \n')
let moedasDe10 = rs.questionInt('Digite o valor do total de moedas de 10 centavos: \n')
let moedasDe5 = rs.questionInt('Digite o valor do total de moedas de 5 centavos: \n')
let moedasDe1 = rs.questionInt('Digite o valor do total de moedas de 1 centavo: \n')

let totalCofrinho = moedasDe100 + (moedasDe50 * 0.5) + (moedasDe25 * 0.25) + (moedasDe10 * 0.1) + (moedasDe5 * 0.05) + (moedasDe1 * 0.01)
console.clear()
if(precoProduto <= totalCofrinho){
    soma = totalCofrinho - precoProduto
    console.log(`O valor antes da compra, presente no cofrinho eram R$ ${totalCofrinho}, após a compra você tem disponível o saldo: R$ ${soma} `) 
}else{
    soma = precoProduto - totalCofrinho
    console.log(`Uma pena mas o total presente no seu cofrinho é de R$ ${totalCofrinho} e o produto que você deseja é ${precoProduto}, ou seja, ainda faltam R$ ${soma} para concretizar a compra`)
}
