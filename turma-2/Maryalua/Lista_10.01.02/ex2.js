/*2 - (Obrigatório) - Crie um programa que simula o download de múltiplas 
imagens de forma assíncrona. O programa deve conter ‘.then’ e ‘.catch’ 
para tratar o sucesso e a falha da promisse*/
function random(max) {
    return Math.random() * max;
  }

function DownloadImagem(){
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve('Download concluído')
        }, random(1000))
    })
}

function DownloadAssinc(){
    console.log('Renderizando Página');
    Promise.all([
        DownloadImagem(),
        DownloadImagem(),
        DownloadImagem(),
        DownloadImagem()
    ]).then(res =>{
        console.log('Todos os downloads foram concluídos');
    });
    console.log('Página Renderizada')
}
DownloadAssinc()