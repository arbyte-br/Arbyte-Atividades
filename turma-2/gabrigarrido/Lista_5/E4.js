var rs = require("readline-sync");
// dentro do loop por conta de ser 5 vezes perguntado*****

for (i = 0; i < 5; i++) {
    var aluno = rs.question("Digite o nome do aluno");
    var grauA = rs.questionInt("Entre com o grau A");
    var grauB = rs.questionInt("Entre como grau B");

    var calculoMedia = grauA*0.3 + grauB*0.7;
    console.log(`O aluno ${aluno} ficou com a média ${calculoMedia}`);
}