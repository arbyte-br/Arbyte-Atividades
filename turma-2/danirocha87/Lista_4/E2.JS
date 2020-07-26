let numero = 1
let limite = 50


while( numero <= limite){
    let texto = "";

    if(numero % 2 === 0){
        texto = numero +  " PAR "; 
    }   else{
        texto =  numero + " IMPAR "
        
    }   
    let divisor = 2
    let primo = true;

    while (divisor < numero){
        if(numero % divisor === 0 ){
            primo = false;
            break;
        }                       
        divisor ++
    }

    if(primo){
        console.log(texto+ " PRIMO")
    } else {
        console.log(texto)
    }

    numero ++
}