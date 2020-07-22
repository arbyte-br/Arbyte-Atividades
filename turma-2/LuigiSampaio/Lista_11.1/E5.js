/* const usuario = {nome: 'Mayara', idade: 25};
    return mostraIdade(usuario) {
        return usuario.idade;
    }

    mostraIdade(usuario);
*/

const usuario = (nome, idade) => ({
  nome: 'Mayara',
  idade: 25
})

console.table(usuario().idade)
