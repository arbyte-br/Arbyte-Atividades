// 2 - (Obrigatório) - Crie um programa que simula o download de múltiplas imagens de forma assíncrona. 
// O programa deve conter ‘.then’ e ‘.catch’ para tratar o sucesso e a falha da promisse.

function random (max){
    Math.random() * max
}

function simulateDownload (){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ('Imagem Baixada!');
        }, random(1000))
    })
}


function Download (){

    console.log('Renderizando a Página...');

    Promise.all ([
        simulateDownload(),
        simulateDownload(),
        simulateDownload(),
        simulateDownload(),
        simulateDownload(),
        simulateDownload(),
        simulateDownload()
    ]).then (res => {
        console.log('Todas imagens foram baixadas com sucesso!')
    })
      .catch(err => {
          console.log(err)
    })

    console.log('Página renderizada!');
}

Download()