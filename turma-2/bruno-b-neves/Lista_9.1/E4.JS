const obj = {
    a: 'a',
    b: 'b',
    c: 'c',
};

const d = 'd';
const e = 'e';

const objTwo = {
    ...obj,
    d,
    e
}

console.log(objTwo)