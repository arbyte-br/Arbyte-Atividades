let rs = require('readline-sync')

let i = 0

while(i < 1000){
    if (i%3=== 0 && i%5 === 0) {
        console.log(i)
    }
    i++
}