/*1 (Obrigatório) - Crie um programa que contenha duas funções, uma delas deve simular o
download de uma imagem de forma síncrona e, a outra deve simular o download desta imagem
de forma assíncrona.*/

function simulardownloadSincrona() {
    for (let i = 0 ; i <101; i++) {

        console.log( `% ${i}`);

    }
    console.log ( `Imagem baixada!`)

 }


  function random (max) {
        return Math.random()* max
  }

 function simulardownlondAssincrona(){
       setTimeout(() => {
            console.log(`Imagem baixada!`)
            } , random (10000) )
       
 }

  function concluirDownloadSincrona(){
      console.log(`Renderizando a pagina Sincrona`)
      simulardownloadSincrona();
      console.log(`Pagina Sincrona renderizada!`)
  }
   function concluirDownloadAssincrona(){
    console.log(`Renderizando a pagina Assincrona`)
    simulardownlondAssincrona();
    console.log(`Pagina Assincrona renderizada!`)

   }

  console.log(concluirDownloadSincrona());
  //console.log(concluirDownloadAssincrona());





