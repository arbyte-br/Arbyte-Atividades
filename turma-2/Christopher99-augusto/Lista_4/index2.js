let numero1 = 1 ;

let numero2 = 50 ;

while (numero1 <= numero2) {
    let eprimo = true ;

    let divisor = 2 ;
   
    while (divisor < numero1) {
        if (numero1 % divisor == 0) {

            eprimo = false ;
        }
    divisor++
    }

if (numero1 % 2 == 0) {
    if (eprimo) {
        console.log(numero1, 'é par e é primo');
    }
    else {
        console.log(numero1, 'é par');
    }
} 
else if(eprimo) {
        console.log(numero1, 'é impar e é primo');
}
else {
        console.log(numero1, 'é impar')
    }
numero1++
}