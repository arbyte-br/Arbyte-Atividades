function quantidadeUsuariosPorSexo(array) {
    let masculino = 0
    let feminino = 0
    let naoInformado = 0

    array.forEach(obj =>{
        if(obj.Sexo === "Masculino") {
            masculino++
        } else if (obj.Sexo === "Feminino") {
            feminino++
        } else {
            naoInformado++
        }
    })
    return `Masculino: ${masculino}, Feminino: ${feminino}, Não informado: ${naoInformado}`

}

let array = [
    {Nome: "João", Sexo: "Masculino"},
    {Nome: "Victor", Sexo: "Masculino"},
    {Nome: "Ana", Sexo: "Feminino"},
    {Nome: "Cleitin", Sexo: "Não informado"},
    {Nome: "Joséfa", Sexo: "Feminino"},
    {Nome: "Maria", Sexo: "Feminino"},
    {Nome: "Roberto", Sexo: "Masculino"},
    {Nome: "Jéssica", Sexo: "Feminino"},
    {Nome: "Carol", Sexo: "Feminino"},
]

console.log(quantidadeUsuariosPorSexo(array))