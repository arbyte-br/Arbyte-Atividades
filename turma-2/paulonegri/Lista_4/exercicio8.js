/*Escreva um programa que simule uma partida de pedra papel e tesoura.
Deve ser solicitado o nome do jogador A e do jogador B.
Após isso o programa deve pedir a jogada do jogador A e a jogada do jogador B.
No final o programa deve imprimir quem ganhou.
Dicas:

Para não exibir a jogada do jogador utilize o comando de “password” no readline-sync*/

let rs = require(`readline-sync`)
let primeirojogador = rs.question(`Digite o nome do primeiro jogador: `)
let segundojogador = rs.question(`Digite o nome do segundo jogador: `)
let pg
password = rs.question(`PASSWORD: `,{hideEchoBack: true})

while(pg !== 'nao'){
    console.log(`pedra(1); papel(2); tesoura(3)`)
    let primeiraJogada = rs.question(`${primeirojogador} faça sua jogada\n`,{hideEchoBack: true})
    let segundaJogada = rs.question(`${segundojogador} faça sua jogada\n`,{hideEchoBack: true})    
    if(primeiraJogada == '1' && segundaJogada == '1'){
        console.log(`EMPATE`)
    }else if(primeiraJogada == '1' && segundaJogada == '2'){
        console.log(`Jogador ${segundojogador} ganhou!`)
    }else if(primeiraJogada == '1' && segundaJogada == '3'){
        console.log(`Jogador ${primeirojogador} ganhou!`)
    }else if(primeiraJogada == '2' && segundaJogada == '1'){
        console.log(`Jogador ${primeirojogador} ganhou!`)
    }else if(primeiraJogada == '2' && segundaJogada == '2'){
        console.log(`EMPATE`)
    }else if(primeiraJogada == '2' && segundaJogada == '3'){
        console.log(`Jogador ${segundojogador} ganhou!`)
    }else if(primeiraJogada == '3' && segundaJogada == '1'){
        console.log(`Jogador ${segundojogador} ganhou!`)
    }else if(primeiraJogada == '3' && segundaJogada == '2'){
        console.log(`Jogador ${primeirojogador} ganhou!`)
    }else if(primeiraJogada == '3' && segundaJogada == '3'){
        console.log(`EMPATE`)
    }
    pg = rs.question(`Gostaria de jogar novamente?`).toLowerCase()
}