/*2 - (Obrigatório) - Crie um programa que simula o download de múltiplas imagens de forma
assíncrona. O programa deve conter ‘.then’ e ‘.catch’ para tratar o sucesso e a falha da
promisse.*/

function random (max) {
    return Math.random()* max
}

function simulardownlondAssincrona(){
     return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            try {
                throw Error("Algum erro")
            } catch (e) {
                reject(e)
            }
            
        }, random(2000))


     
    })
}
function concluirDownloadAssincrona(){
   console.log(`Renderizando a pagina Assincrona`)
   simulardownlondAssincrona()
     .then(res => console.log(res)) 
     .catch(err => console.log(err)) 
   console.log(`Pagina Assincrona renderizada!`)

  }

  console.log(concluirDownloadAssincrona());