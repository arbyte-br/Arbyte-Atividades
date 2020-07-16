// const usuario = { 
//     nome: 'Mayara', 
//     idade: 25 
// };
// function mostraIdade(usuario) {
//     return usuario.idade;
// }
// mostraIdade(usuario);

const usuario = { 
        nome: 'Mayara', 
        idade: 25,
        mostraIdade: (idade) => console.log(usuario.idade) 
    };

usuario.mostraIdade();