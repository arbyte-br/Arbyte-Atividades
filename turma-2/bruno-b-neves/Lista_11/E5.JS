const usuario = {
    nome: 'Mayara',
    idade: 25
};

let mostraIdade = (usuario) => {
    return usuario.idade;
};

const {idade} = usuario; 
console.log(mostraIdade(usuario));
