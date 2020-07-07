let rs = require('readline-sync')


let MaçãsCompradas = rs.question("Numero de macas compradas\n>>")

if (MaçãsCompradas < 12){
    console.log("Cada maçã custa R$0,30.")
}
if (MaçãsCompradas >= 12){
    console.log("Cada maçã custa R$0,25.")
}
