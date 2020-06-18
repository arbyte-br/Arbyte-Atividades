const rs = require('readline-sync')
var nums = Array(3).fill(0).map( (v,i) => rs.questionInt(`Número ${i+1}: `) )
console.log(nums.sort().join(', '))
