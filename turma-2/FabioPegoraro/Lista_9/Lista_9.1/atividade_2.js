//Use o spread operator para transformar o array ​['​a​', '​b​', '​c​']​ em  ['​a​', '​b​', '​c​', '​a​', '​b​', '​c​'] 

let letras1 = ['​a​', '​b​', '​c​']
let maisLetras = ['​a​', '​b​', '​c​', ...letras1]
console.log(maisLetras)