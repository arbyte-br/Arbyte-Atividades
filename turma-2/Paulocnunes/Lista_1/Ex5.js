let valor1 = 50
let valor2 = 30
let valor3 = 25

if (valor1 < valor2 && valor1 < valor3)
    if (valor2 < valor3) {
        console.log (valor1, valor2, valor3)
    } else {
        console.log (valor1, valor3, valor2)
    } 
    
        else if (valor2 < valor1 && valor2 < valor3) {
            if (valor3 < valor1) {
                console.log(valor2, valor3, valor1)
            } else {
                console.log(valor2, valor1, valor3)
            }
        } else {
            if (valor2 < valor1) {
                console.log(valor3, valor2, valor1)
            } else {
                console.log(valor3, valor1, valor2)
            }
        }
    