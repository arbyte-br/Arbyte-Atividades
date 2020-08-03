// (Obrigatório) Use o spread operator para transformar o array 
// ​['​a​', '​b​', '​c​']​ em['​a​', '​b​', '​c​', '​a​', '​b​', '​c​']

const alfabeto1 = ["a", "b", "c"]
const alfabeto2 = ["a", "b", "c",... alfabeto1]
console.log(alfabeto2)