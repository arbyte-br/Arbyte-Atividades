let j = 4

console.log("1 IMPAR") 
console.log("2 PAR PRIMO")
console.log("3 IMPAR PRIMO")

while(j<9){
    if (j%2 ===0){
        console.log(`${j} PAR`)
    } else {
        if (j%3 !==0){
            console.log(`${j} IMPAR PRIMO`)
        } else{
            console.log(`${j} IMPAR`)
        }
    }
    j++
}

let i=9
while(i<=50){
    if(i%2 === 0){
        especi = "PAR"
    } else if(i%2 !==0){
        especi = "IMPAR"
        if(i%3 !== 0 && i%4 !==0 && i%5 !==0 && i%7 !==0){
            especi = especi + " PRIMO"
        } 
    } console.log(`${i} ${especi}`)
    i++
} 