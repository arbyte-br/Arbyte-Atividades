/*
2 - (Obrigatório) 
Use o spread operator para transformar o array ​['​a​', '​b​', '​c​']​ em ['​a​', '​b​', '​c​', '​a​', '​b​', '​c​']
*/

const arr = ['a', 'b', 'c'];

const args = ['a', 'b', 'c', ...arr];

console.log(args);