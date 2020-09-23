function mediaFaturamento(array) {
     return `Média do faturamento: ` + (array.map(valor => valor.Valor ).reduce((valor1, valor2) => valor1+= valor2) / array.length).toFixed(2)

}

function menorDiaFaturamento(array) {
    let menorDia;
    let valor = 100000000
    array.forEach(dia => {
        if(dia.Valor < valor) {
            menorDia = dia
            valor = dia.Valor
        }
    })

    return `O faturamento do dia ${menorDia.Dia} foi o menor. \nValor do faturamento: R$ ${menorDia.Valor}`
}

function maiorDiaFaturamento(array) {
    let maiorDia;
    let valor = 0
    array.forEach(dia => {
        if(dia.Valor > valor) {
            maiorDia = dia
            valor = dia.Valor
        }
    })

    return `O faturamento do dia ${maiorDia.Dia} foi o maior. \nValor do faturamento: R$ ${maiorDia.Valor}`
}

let faturamento = [
    {Dia: '01/10', Valor: 1160.10},
    {Dia: '02/10', Valor: 1540.40},
    {Dia: '03/10', Valor: 1330.90},
    {Dia: '04/10', Valor: 1998.40},
    {Dia: '05/10', Valor: 2060.20},
    {Dia: '06/10', Valor: 3100.75},
    {Dia: '07/10', Valor: 1110.00},
    {Dia: '08/10', Valor: 1895.40},
    {Dia: '09/10', Valor: 1123.65},
    {Dia: '10/10', Valor: 1100.85},
    {Dia: '11/10', Valor: 2760.45},
    {Dia: '12/10', Valor: 3010.40},
    {Dia: '13/10', Valor: 1750.50}
]

/* console.log(maiorDiaFaturamento(faturamento)) */
/* console.log(menorDiaFaturamento(faturamento)) */
/* console.log(mediaFaturamento(faturamento)) */
