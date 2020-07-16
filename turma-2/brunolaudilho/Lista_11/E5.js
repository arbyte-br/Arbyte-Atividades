const usuario = {
    nome:'Mayara', 
    idade:25
};

function mostraIdade (usuario){
    return usuario.idade;
}
console.log(mostraIdade(usuario));

/*const mostraIdade = ({idade}) => idade;
console.log(mostraIdade(usuario));*/