let rs = require ('readline-sync');



console.log("\n");
let linha = 1;
while (linha < 8)
{
  console.log( "\t" );
  let coluna = 1;
  while (coluna < linha)
  {
    console.log( "*" );
    coluna += 1;
  }
  console.log( "\n" );
  linha += 1;
}

