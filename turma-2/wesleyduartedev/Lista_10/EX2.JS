/*OBRIGATÓRIO) - Usando a classe do exercício anterior, crie métodos
que representem possíveis ações do usuário no aplicativo.*/
//ex: solicitarNovaViagem(local), editarEnderecoPrimario(endereco),
//adicionarFormaDePagamento(pagamento)
var rs = require('readline-sync');

class Usuario {
    constructor (){
        this.nome = rs.question('Digite seu nome: ');
        this.email = rs.question('Digite seu email: ');
        this.telefone = rs.questionInt('Digite seu telefone: ');
        this.local= rs.question('Digite seu endereço o qual quer ir: ');
        this.pagamento = rs.question('Digite a forma de pagamento: ');

        }



     solicitarNovaViagem(novolocal){
         console.log(`Voce esta  indo á ${this.local} , sua nova viagem será: ${local} `);
         this.local= local ;
       }
    
      editarEnderecoPrimario(enderecodestinado){
        rs.question('Deseja editar seu destino: ')
        if ("Sim"){
            this.enderecodestinado = rs.question('Digite seu endereço para editar-lo: ');
           }else {
            console.log('Seguiremos Viagem');
           }
 
        }
    
    
   
    adicionarFormaDePagamento(pagamento){
        rs.question('Sua forma de Pagamento:');
        if ('Dinheiro'){
            console.log('Sua forma de Pagamento é dinhero!');
        } else{
            console.log('Sua forma de Pagamento é Cartao!');
        }

    }


    
  
}

const usuarioUber = new Usuario();
console.log(usuarioUber);
usuarioUber.solicitarNovaViagem();