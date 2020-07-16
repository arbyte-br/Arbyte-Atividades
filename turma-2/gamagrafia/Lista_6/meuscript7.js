//recebe uma palavra
// verifica se a palavra comete o erro Antes de “p” ou “b” devemos usar M
//caso errado informa o erro
// senão dizer que está certa

let rs= require('readline-sync')

let palavra= rs.question('Diga qual sua palavra')

if (palavra.includes('np',"nb")){
    console.log ('Antes de “p” ou “b” devemos usar M')
} else{
    console.log(palavra)
}
