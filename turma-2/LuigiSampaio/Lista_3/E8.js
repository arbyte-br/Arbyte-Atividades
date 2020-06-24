let rs = require('readline-sync');

let per = rs.question('escolha -> A <- para sair || -> B <- para fazer uma soma: ');


switch(per){
    case 'A':
        console.log('Saindo');
        break;

    case 'B':
        let n1 = rs.questionInt('insira um numero: ');
        let n2 = rs.questionInt('insira outro numero: ');

        let soma = n1 + n2;
        console.log(`resultado da soma de ${n1} + ${n2} é = ${soma}`);

        per = rs.question('deseja fazer outro calculo [A]- Sim || [B]- Nao: ');       

        while(per === 'A'){
                        
            n1 = rs.questionInt('insira um numero: ');
            n2 = rs.questionInt('insira outro numero: ');

            soma = n1 + n2;
            console.log(`resultado da soma de ${n1} + ${n2} é = ${soma}`);
            per = rs.question('deseja fazer outro calculo [A]- Sim || [B]- Nao: ');
       }

        while((per != 'A' ) && (per != 'B')){
            
            per = rs.question(' Valor invalido, para voltar ao programa digite [A]- voltar|| [B]- Nao voltar: ');

            while(per === 'A'){
                        
                n1 = rs.questionInt('insira um numero: ');
                n2 = rs.questionInt('insira outro numero: ');
    
                soma = n1 + n2;
                console.log(`resultado da soma de ${n1} + ${n2} é = ${soma}`);
                per = rs.question('deseja fazer outro calculo [A]- Sim || [B]- Nao: ');
           }

        }
 
        
}

