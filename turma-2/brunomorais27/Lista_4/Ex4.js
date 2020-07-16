let v1 = 0
let v2 = 1000
let multiplo = 0

while(v1 <= v2){
    if (v1 % 3 == 0 && v1 % 5 == 0){
        multiplo = multiplo + v1
    }
    v1++
}
console.log(multiplo)