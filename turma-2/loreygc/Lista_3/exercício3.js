
let Num = 1, msg = "";
while (Num <= 100) {
    if (Num % 2 === 1) {
        if (Num === 100){
            msg += Num + ". ";
        }else{
            msg += Num + ", ";
        }
    }
    Num++;
}
console.log(msg);