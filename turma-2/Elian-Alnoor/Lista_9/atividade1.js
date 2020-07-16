let rs = require("readline-sync")

let num1 = rs.questionInt("Insira um número:\n")

let num2 = rs.questionInt("Insira um número:\n")

let num3 = rs.questionInt("Insira um número:\n")

let num4 = rs.questionInt("Insira um número:\n")

let median = require("median")

let arr = [num1, num2, num3, num4]

let value = median(arr)
 
console.log("median value is " + value)