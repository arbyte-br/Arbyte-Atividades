const nascimento = (nome, dia, mes, ano) => {
    const dataAtual = new Date();
    const idade = dataAtual.getFullYear();
    const calcIdade = idade - ano;
    
    return `${nome} Nasceu em ${dia}/${mes}/${ano} e Tem ${calcIdade} Anos de Idade`;
}

console.log(nascimento('luigi sampaio', 18,03,1997))
