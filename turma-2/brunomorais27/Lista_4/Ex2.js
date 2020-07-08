let i = 1
let maximo = 50
while (i <= maximo){
    let j = 2
    let primo = true
    while (j < i){
        if(i % j == 0){
            primo = false
        }
        break
     j++
    }
    if (i % 2 == 0){
        if(primo){
        console.log(i, 'PAR PRIMO')
        }else{
            console.log(i, 'PAR')
        }
    }else if (primo){
        console.log(i, 'ÍMPAR PRIMO')
    }else{
        console.log(i, 'ÍMPAR')
    }
    i++
}