// Remember if a number is prime.
const memoize = { isPrime: {}, isNotPrime: {} }
memoize.isNotPrime[1] = true
memoize.isPrime[2] = true

/**
 * Check if a number is prime.
 *
 * @param {Number}
 *
 * @returns {Boolean}
 */

function primeNumber (num) {
  // Avoid computing twice.
  if (memoize.isPrime[num]) return true
  if (memoize.isNotPrime[num]) return false

  const knowPrimes = Object.keys(memoize.isPrime)

  for (let i = 0; i < knowPrimes.length; i++) {
    const p = Number(knowPrimes[i])

    if (num === p) return true

    if (num % p === 0) {
      memoize.isNotPrime[num] = true
      return false
    }
  }

  for (
    let i = 3;
    // Do not excede the square root of num.
    i * i <= num;
    // All prime numbers are 1 or 5 modulo 6.
    // Since we start with 3, this will do: 3 -> 5 -> 7 -> 11 ... +2 -> +4 -> +2 -> +4 ...
    i = i % 6 === 1 ? i + 4 : i + 2
  ) {
    if (primeNumber(i)) { // <-- Recursion here!
      if (num % i === 0) {
        memoize.isNotPrime[num] = true
        return false
      }
    }
  }

  memoize.isPrime[num] = true
  return true
}
module.exports = primeNumber
