const obj = {
    a:"a",
    b:"b",
    c:"c",
    d:"d"
}

const {a, b,...c} = obj

console.log(a,b,c)