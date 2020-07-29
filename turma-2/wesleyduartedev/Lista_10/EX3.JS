/*- (Obrigatório) Crie um programa que simula a compra de um produto no supermercado, o
programa deve simular o processamento de uma compra e imprimir as seguintes mensagens
no console:
1 - Compra em processamento
2 - Compra aprovada OU Negada (para erros)*/


function random (max) {
    return Math.random()* max
}

function simulardownlondAssincrona(){
     return new Promise ((resolva, reject) =>{
           let r = parseInt(random(10));
           console.log(r)
          setTimeout(() => {
           if ( r %2 === 0 ){
             resolva (`Compra aprovada (é par)`)
           }
        
           else {
               reject(`Compra não aprovada (é impar)`);
           }
      } , random (10000)) 
        
     
    })
}
function concluirDownloadAssincrona(){
   console.log(`Compra em processo`)
   simulardownlondAssincrona()
     .then(res => console.log(res)) 
     .catch(err => console.log(err)) 
    console.log(`Termino de processo!`)

  }
  

  console.log(concluirDownloadAssincrona());
