# age-calculator.js

small helper library that provides one an ability to calculate age of a person

## Installation

```bash
  npm install age-calculator
```

## Usage

```javascript
  var ageCalculator = require('age-calculator');
  let {AgeFromDateString, AgeFromDate} = require('age-calculator');

  // Be careful: Javascript months start at 0 (so zero stands for january)

  let ageFromDate = new AgeFromDate(new Date(1987, 0, 8)).age;
  console.log("value from AgeFromDate", ageFromDate);
  // output: 30 (at the time of this doc)

  let ageFromString = new AgeFromDateString('1987-01-08').age;
  console.log("value from ageFromString", ageFromString);
  // output: 30 (at the time of this doc)

```

## Tests

```bash
  npm test
```

## Contributing

If you find a bug or willing to add some enhancement, pull requests are very welcome

## Release History

* 0.0.1 Initial release
* 0.0.2 Changed structure of a module
* 1.0.0 TypeScript rewrite

## Legal

The MIT License (MIT)

Copyright (c) 2015 Roman Jurkov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
