# prime-number

> is a recursive function to check if a number is prime (and a benchmark to test slow it is :)

[![KLP](https://img.shields.io/badge/kiss-literate-orange.svg)](https://github.com/fibo/kiss-literate-programming)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

**Table of Contents**

* [Usage](#usage): `isPrime`, how to benchmark, primes list.
* [Installation](#installation): with npm or copy and paste.
* [Source](#source): embedded in this file.
* [License](#license): MIT.

[Is it 1 a prime ?](https://en.wikipedia.org/wiki/Prime_number#Primality_of_one)
Some years ago I composed a djembe rhythm based on prime numbers, and it sounds better if 1 is considered prime. Casually, the algorithm implemented here defines 1 as a *not prime*.

## Usage

As you might expect, you can do

```js
const isPrime = require('prime-number')

console.log(isPrime(19)) // true
```

There is a list of few primes available, if you want to use it

```js
const primeNumberList = require('prime-number/list')
console.log(primeNumberList)
```

You can benchmark other primality check algorithms.

```js
const isPrime = require('yet-another-primality-check')
const benchmark = require('prime-number/benchmark')
const from = 1000
const to = Number.MAX_SAFE_INTEGER

benchmark(isPrime)(from, to)
```

Using a oneliner, let's check few primality check packages found on npm.

```bash
# node -e "require('prime-number/benchmark')(require('prime-number'))(10000, 100000)"
Found 8363 primes
Primality benchmark: 44.703s

# node -e "require('prime-number/benchmark')(require('is-prime'))(10000, 100000)"
Found 8363 primes
Primality benchmark: 14.885ms

# node -e "require('prime-number/benchmark')(require('check-prime'))(10000, 100000)"
Found 654987 primes
primality benchmark: 61.613ms
```

So I can state that

> My algorithm sucks! 🐸

## Installation

With [npm](https://npmjs.org/) do

```bash
npm install prime-number
```

Or copy and paste the code below.

## Source

First of all, do not check if **num** is an integer or positive or less than `Number.MAX_SAFE_INTEGER`.
You can do it with some other function before calling `primeNumber`.

```javascript
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
```

Export `primeNumber` function

```javascript
module.exports = primeNumber
```

## License

[MIT](http://g14n.info/mit-license/)
