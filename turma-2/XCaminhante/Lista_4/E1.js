const rs = require('readline-sync')
function numEntre1e100 (n) { return !Number.isNaN(n) && 1<=n && n<=100 }
function menorIgualQue (a,b) { return (a <= b ? -1 : 1) }
var opts = {limit:numEntre1e100, limitMessage:'Apenas números entre 1 e 100'}
var nums = Array(2).fill(0).map( (v,i) => parseInt(rs.question(`Número ${i+1}? `,opts)) )
nums.sort(menorIgualQue)
for (var i = nums[0]; i <= nums[1]; i++) {
  var r = ''
  if (i % 7 == 0) { r += 'Ping ' }
  if (i % 5 == 0) { r += 'Pong' }
  if (r) { console.log(r) } else { console.log(i) }
}
