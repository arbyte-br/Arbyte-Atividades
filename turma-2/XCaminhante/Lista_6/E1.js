const rs = require('readline-sync')
function apenas1a10 (n) { return !Number.isNaN(n) && 1<=n && n<=10 }
function pedirNumeros () {
  var opts = {limit:apenas1a10, limitMessage:'Apenas números entre 1 e 10'}
  return Array(5).fill(0).map( (v,i)=> rs.question(`Número #${i+1}: `,opts) )
}
var nomeA = rs.question('Nome A: ')
var numsA = pedirNumeros()
var nomeB = rs.question('Nome B: ')
var numsB = pedirNumeros()
function innerJoin (a,b) {
  return a.filter( (x) => b.indexOf(x)!=-1 )
}
console.log(`${nomeA}: ${numsA}`)
console.log(`${nomeB}: ${numsB}`)
console.log(`Números escolhidos iguais: ${innerJoin(numsA,numsB)}`)
