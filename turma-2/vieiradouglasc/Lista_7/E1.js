// Faça uma função que recebe uma string com um nome e imprime a
// seguinte mensagem no console: "Olá <nome do usuário>, bem vindo!". Onde
// <nome_do_usuario> deve ser substituído pelo nome recebido pela função como
// parâmetro. Ao executar o seu código, a mensagem deve ser exibida na tela. (Não é
// necessário pedir dados para o usuário, você pode definir os valores usados na
// aplicação aleatoriamente)

function nomeUser (nome_do_usuario) {
    return 'Olá ' + nome_do_usuario + ', bem vindo!'
}
let res = nomeUser('Douglas')
console.log(res)