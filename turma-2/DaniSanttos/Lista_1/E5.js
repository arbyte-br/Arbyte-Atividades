let rs = require("readline-sync")

let n1 = rs.questionInt("Digite o número 1: ")
let n2 = rs.questionInt("Digite o número 2: ")
let n3 = rs.questionInt("Digite o número 3: ")

if (n1 >= n2 && n2 >= n3 && n3 <= n1){
    console.log("Seus Números em sequencia são: " + n3, n2, n1)
}else if (n1 <= n2 && n2 <= n3 && n3 >=n1){
    console.log("Seus Números em sequencia são: " + n1, n2, n3)
}else if(n1 <= n2 && n2 >= n3 && n3 <= n1){
    console.log("Seus Números em sequencia são: " + n3, n1, n2)
}else if (n1 >= n2 && n2 <= n3 && n3 <= n1){
    console.log("Seus Números em sequencia são: " + n2, n3, n1)
}else if (n1 >= n2 && n2 <= n3 && n3 >= n1){
    console.log("Seus Números em sequencia são: " + n2, n1, n3)
}else if (n1 <= n2 && n2 >= n3 && n3 >= n1){
    console.log ("Seus Números em sequencia são: " + n1, n3, n2)
}