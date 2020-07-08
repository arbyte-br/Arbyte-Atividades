function calculoRaio(raio) {
    let volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
    return volume;
}
let valor = 12;
console.log(calculoRaio(valor));