let fs = require('fs');
let rs = require('readline-sync');

let transforma = [];
let pergunta = rs.question('Gostaria de adicionar informações? 1 SIM / OU 2 Para ler informações')

while (pergunta == '1' || pergunta == '2') {

    if (pergunta == '1') {

        let carro = {

            marca: rs.question("Marca: "),
            modelo: rs.question("Modelo: "),
            ano: rs.question("Ano: ")

        };

        transforma.push(carro);
        let carroJsonCamingo = "carro.json";
        let carroString = JSON.stringify(transforma);
        fs.writeFileSync(carroJsonCamingo, carroString);
        pergunta = rs.question('1 Para adicionar Informação 2 Para ler informações ou Qual quer outra tecla para sair.');
    }



    else if (pergunta == '2') {

        let lerArquivo = fs.readFileSync('carro.json');

        let objeto = JSON.parse(lerArquivo);

        console.log(objeto);
        pergunta = rs.question('1 Para adicionar Informação 2 Para ler informações ou Qual quer outra tecla para sair.');
    }

}
