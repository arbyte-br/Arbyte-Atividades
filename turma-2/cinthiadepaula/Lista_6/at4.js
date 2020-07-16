let rs = require('readline-sync');

let palavra = rs.question("Digite aqui uma palavra: \n");
let totalvogal = 0;
let totalconsoante = 0;

for(let i=0; i < palavra.length; i++) 
{
    if(palavra.charAt(i) == 'a' ||palavra.charAt(i) == 'e' ||palavra.charAt(i) == 'i' || palavra.charAt(i) =='o' ||palavra.charAt(i) == 'u')
    {
        
        totalvogal = totalvogal +1;
    } 
    else
    {
        
        totalconsoante = totalconsoante+1;
    }
}

console.log(`${totalvogal} vogais`);
console.log(`${totalconsoante} consoantes`);



