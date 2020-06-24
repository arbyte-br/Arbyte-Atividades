let rs = require('readline-sync');

let ddi = Number(rs.question('Insira o DDI: '));

switch (ddi) {
    case 1 : console.log('Estados Unidos');
    break;
    case 7 : console.log('Russia');
    break;
    case 20 : console.log('Egito');
    break;
    case 27 : console.log('Africa do Sul');
    break;
    case 30 : console.log('Grecia');
    break;
    case 31 : console.log('Paises Baixos');
    break;
    case 32 : console.log('Belgica');
    break;
    case 33 : console.log('Franca');
    break;
    case 34 : console.log('Espanha');
    break;
    case 36 : console.log('Hungria');
    break;
    case 39 : console.log('Italia');
    break;
    case 40 : console.log('Romenia');
    break;
    case 41 : console.log('Suica');
    break;
    case 43 : console.log('Austria');
    break;
    case 44 : console.log('Reino Unido');
    break;
    case 45 : console.log('Dinamarca');
    break;
    case 46 : console.log('Suecia');
    break;
    case 47 : console.log('Noruega');
    break;
    case 51 : console.log('Peru');
    break;
    case 52 : console.log('Mexico');
    break;
    case 53 : console.log('Cuba');
    break;
    case 54 : console.log('Argentina');
    break;
    case 55 : console.log('Brasil');
    break;
    case 56 : console.log('Chile');
    break;
    default : console.log('DDI invalido ou nao cadastrado')
}