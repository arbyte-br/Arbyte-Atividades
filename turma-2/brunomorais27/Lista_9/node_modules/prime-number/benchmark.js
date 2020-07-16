/**
 * Benchmark a primality algorythm
 *
 * @param {Function} isPrime
 *
 * @returns {Function} checkPrimality (from, to)
 */
function benchmark (isPrime) {
  /**
   * Primality check on given range
   *
   * @param {Number|BigInt} from
   * @param {Number|BigInt} to
   */
  return function checkPrimality (from, to) {
    console.time('Primality benchmark')

    let countPrimes = 0

    for (let i = from; i <= to; i++) if (isPrime(i)) countPrimes++

    if (countPrimes === 0) {
      console.log('No prime number found')
    }

    if (countPrimes === 1) {
      console.log('Found 1 prime')
    }

    if (countPrimes > 1) {
      console.log(`Found ${countPrimes} primes`)
    }

    console.timeEnd('Primality benchmark')
  }
}

module.exports = benchmark
