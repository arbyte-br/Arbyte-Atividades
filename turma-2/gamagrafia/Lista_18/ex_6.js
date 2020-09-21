/* Após criar todos os métodos acima, crie um programa que cadastra usuário, esse programa
deve utilizar os métodos criados para garantir que nenhum usuário irá cadastrar um dado
incorreto. */

const rs= require('readline-sync')

    class Pessoa {
        constructor(nome,idade,cpf,cidade,telefone) {
            this.nome= nome;
            this.idade= idade;
            this.cpf= cpf;
            this.cidade= cidade;
            this.telefone= telefone
    
        }
    
        validaCpfCnpj(val) {        
            if (val.length == 14) {
                var cpf = val.trim();
             
                cpf = cpf.replace(/\./g, '');
                cpf = cpf.replace('-', '');
                cpf = cpf.split('');
                
                var v1 = 0;
                var v2 = 0;
                var aux = false;
                
                for (var i = 1; cpf.length > i; i++) {
                    if (cpf[i - 1] != cpf[i]) {
                        aux = true;   
                    }
                } 
                
                if (aux == false) {
                    return false; 
                } 
                
                for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
                    v1 += cpf[i] * p; 
                } 
                
                v1 = ((v1 * 10) % 11);
                
                if (v1 == 10) {
                    v1 = 0; 
                }
                
                if (v1 != cpf[9]) {
                    return false; 
                } 
                
                for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
                    v2 += cpf[i] * p; 
                } 
                
                v2 = ((v2 * 10) % 11);
                
                if (v2 == 10) {
                    v2 = 0; 
                }
                
                if (v2 != cpf[10]) {
                    return false; 
                } else {   
                    return true; 
                }
            } else if (val.length == 18) {
                var cnpj = val.trim();
                
                cnpj = cnpj.replace(/\./g, '');
                cnpj = cnpj.replace('-', '');
                cnpj = cnpj.replace('/', ''); 
                cnpj = cnpj.split(''); 
                
                var v1 = 0;
                var v2 = 0;
                var aux = false;
                
                for (var i = 1; cnpj.length > i; i++) { 
                    if (cnpj[i - 1] != cnpj[i]) {  
                        aux = true;   
                    } 
                } 
                
                if (aux == false) {  
                    return false; 
                }
                
                for (var i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
                    if (p1 >= 2) {  
                        v1 += cnpj[i] * p1;  
                    } else {  
                        v1 += cnpj[i] * p2;  
                    } 
                } 
                
                v1 = (v1 % 11);
                
                if (v1 < 2) { 
                    v1 = 0; 
                } else { 
                    v1 = (11 - v1); 
                } 
                
                if (v1 != cnpj[12]) {  
                    return false; 
                } 
                
                for (var i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) { 
                    if (p1 >= 2) {  
                        v2 += cnpj[i] * p1;  
                    } else {   
                        v2 += cnpj[i] * p2; 
                    } 
                }
                
                v2 = (v2 % 11); 
                
                if (v2 < 2) {  
                    v2 = 0;
                } else { 
                    v2 = (11 - v2); 
                } 
                
                if (v2 != cnpj[13]) {   
                    return false; 
                } else {  
                    return true; 
                }
            } else {
                return false;
            }
         }
    
         verificaIdade() {
             if (this.idade < 18) {
                 console.log('Menor de Idade')
                 
             } else {
                console.log('Maior de Idade')
             }
         }

         validaTelefone() {
             if (this.telefone.length < 10) {

                console.log("Número invalido")
                 
             }else{
                 console.log('Número Válido')
             }
         }
        
        }
    
    
    function novoUsuario() => {
        let nome= rs.question ('Qual seu nome?\n')
        let idade= rs.question ('Qual sua idade?\n')
        let cpf= rs.question ('Qual seu cpf?\n')
        let cidade= rs.question ('Qual sua cidade?\n')
        let telefone= rs.question ('Qual seu telefone?\n')
    }
    
    
    let pessoaNova= new Pessoa(nome,idade,cpf,cidade,telefone)
    
    pessoaNova.validaTelefone()