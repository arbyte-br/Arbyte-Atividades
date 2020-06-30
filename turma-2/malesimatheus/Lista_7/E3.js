function diasDeVida(anos, meses, dias) {
    let anosEmDias = anos * 365;
    let mesesEmDias = meses * 30;
    let resultado = dias + anosEmDias + mesesEmDias;
    console.log(resultado + 'dias de vida.');
}

diasDeVida(12, 7, 12);