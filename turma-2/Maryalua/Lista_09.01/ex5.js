//Converta a função abaixo para arrow function:

//const usuario = { nome: 'Mayara', idade: 25 };
//function mostraIdade(usuario) {
//return usuario.idade;
//}
//mostraIdade(usuario);


const usuario = { nome: 'Mayara', idade: 25 };

const mostraIdade = ({idade}) => idade
console.log(mostraIdade(usuario))