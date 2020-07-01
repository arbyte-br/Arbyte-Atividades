function volumeDaEsfera(raio) {
    let volume = 4 / 3 * Math.pow(raio, 3) * Math.PI;
    console.log(volume.toFixed(2));
}

volumeDaEsfera(3);