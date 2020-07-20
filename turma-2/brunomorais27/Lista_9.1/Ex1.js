/* 1 - (Obrigatório) Para cada um dos modos de declarar variáveis, faça os seguintes testes:*/


/*++++++++++++++++++++++++++++++++++++++++++++++++VAR+++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/* a) Declare uma variável dentro de uma função e tente acessar a mesma fora da função*/

/*
function teste (){
    var a = "Bruno"
}
console.log(a)
*/


/*=============================================================*/


/*b) Declare uma variável dentro de um bloco (if, else, for, etc.) e tente acessar a mesma
fora do bloco*/

/*
if (1===2){
    var a = "Bruno"
}
console.log(a)
*/


/*=============================================================*/


/*c) Declare duas vezes a mesma variável no mesmo escopo*/

/*
var a = "Bruno"
{
var a = "Rafael"
var a = "Leu"
}
console.log(a)
*/


/*=============================================================*/


/* d) Declare uma variável fora de uma função, declare a mesma variável dentro de uma
função e depois imprima seu valor depois de executar essa função */

/*
var a = "Rafael"
function teste () {
    var a = "Bruno"
    return a
}
console.log(teste()) 
*/


/*=============================================================*/


/*e) Declare uma variável fora de um bloco, declare a mesma variável dentro de uma
bloco e depois imprima seu valor depois do bloco*/


 /*
 var a = "Bruno"
    {var a = "Rafael"}
    console.log(a)
*/

/*=============================================================*/



/*f) Declare uma variável e mude o valor dela depois*/

/*
var a = "Bruno"
var a = "Rafael"
console.log(a)
*/


/*++++++++++++++++++++++++++++++++++++++++++++++++LET+++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/* a) Declare uma variável dentro de uma função e tente acessar a mesma fora da função*/

/*
function teste (){
    let a = "Bruno"
}
console.log(a)
*/


/*=============================================================*/


/*b) Declare uma variável dentro de um bloco (if, else, for, etc.) e tente acessar a mesma
fora do bloco*/

/*
if (1===2){
    let a = "Bruno"
}
console.log(a)
*/


/*=============================================================*/


/*c) Declare duas vezes a mesma variável no mesmo escopo*/

/*
let a = "Bruno"
{
let a = "Rafael"
let a = "Leu"
}
console.log(a)
*/


/*=============================================================*/


/* d) Declare uma variável fora de uma função, declare a mesma variável dentro de uma
função e depois imprima seu valor depois de executar essa função */

/*
let a = "Rafael"
function teste () {
    let a = "Bruno"
    return a
}
console.log(teste()) 
*/


/*=============================================================*/


/*e) Declare uma variável fora de um bloco, declare a mesma variável dentro de uma
bloco e depois imprima seu valor depois do bloco*/


 /*
 let a = "Bruno"
    {let a = "Rafael"}
    console.log(a)
*/

/*=============================================================*/



/*f) Declare uma variável e mude o valor dela depois*/

/*
let a = "Bruno"
let a = "Rafael"
console.log(a)
*/


/*++++++++++++++++++++++++++++++++++++++++++++++++CONST+++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/* a) Declare uma variável dentro de uma função e tente acessar a mesma fora da função*/

/*
function teste (){
    const a = "Bruno"
}
console.log(a)
*/


/*=============================================================*/


/*b) Declare uma variável dentro de um bloco (if, else, for, etc.) e tente acessar a mesma
fora do bloco*/

/*
if (1===2){
    const a = "Bruno"
}
console.log(a)
*/


/*=============================================================*/


/*c) Declare duas vezes a mesma variável no mesmo escopo*/

/*
const a = "Bruno"
{
const a = "Rafael"
const a = "Leu"
}
console.log(a)
*/


/*=============================================================*/


/* d) Declare uma variável fora de uma função, declare a mesma variável dentro de uma
função e depois imprima seu valor depois de executar essa função */

/*
const a = "Rafael"
function teste () {
    const a = "Bruno"
    return a
}
console.log(teste()) 
*/


/*=============================================================*/


/*e) Declare uma variável fora de um bloco, declare a mesma variável dentro de uma
bloco e depois imprima seu valor depois do bloco*/


 /*
 const a = "Bruno"
    {const a = "Rafael"}
    console.log(a)
*/

/*=============================================================*/



/*f) Declare uma variável e mude o valor dela depois*/

/*
const a = "Bruno"
const a = "Rafael"
console.log(a)
*/