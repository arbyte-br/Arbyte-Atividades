 var rs = require("readline-sync")
 var key = rs.question("Informa a senha valida")

 if (key === "1234") {
     console.log("Acesso Permitido")
 } else {
     console.log("Acesso Negado")
 }
