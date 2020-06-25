let rs = require('readline-sync')

for(i = 1; i <= 5; i++){
    let nA = rs.questionFloat('Insira a nota A: ')
    let nB = rs.questionFloat('Insira a nota B: ')

    let media = ((nA*0.3)+(nB*0.7)).toFixed(2)
    console.log(media)
}
console.log('==================')