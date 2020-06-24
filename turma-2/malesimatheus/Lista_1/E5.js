let rs = require('readline-sync');

let n1 = Number(rs.question('Insira um numero: '));
let n2 = Number(rs.question('Insira um numero: '));
let n3 = Number(rs.question('Insira um numero: '));

if (n1 < n2 && n1 < n3) {
    if (n2 < n3) {
        console.log(n1 + ', ' + n2 + ', ' + n3)
    } else {
        console.log(n1 + ', ' + n3 + ', ' + n2)
    }
} else if (n2 < n1 && n2 < n3) {
    if (n1 < n3) {
        console.log(n2 + ', ' + n1 + ', ' + n3)
    } else {
        console.log(n2 + ', ' + n3 + ', ' + n1)
    }
} else if (n1 < n2) {
    console.log(n3 + ', ' + n1 + ', ' + n2)
} else {
    console.log(n3 + ', ' + n2 + ', ' + n1)
}
