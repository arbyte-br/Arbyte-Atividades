//2 - (Obrigatório) - Crie um programa que simula o download 
// de múltiplas imagens de forma assíncrona. 
 // programa deve conter ‘.then’ e ‘.catch’ para tratar o sucesso
 //  e a falha da promisse

 function simularDownload(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Imagem não baixada")
        }, random(1000))
    })
    }
    function random(max) {
        return Math.random() * max;
      }
    function assyncDownload (){
        console.log("Renderizando Página")

        simularDownload()
        .then(res => console.log(res))
        .catch(err => console.log(err));
        console.log("Pagina Renderizada")
    }
    assyncDownload();