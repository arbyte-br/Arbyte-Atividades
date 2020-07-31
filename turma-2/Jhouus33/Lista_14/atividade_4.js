// (OBRIGATÓRIO)Faça um algoritmo que receba uma CEP e diga qual é o endereço
// completo (Cidade, rua, estado) deste CEP.
// Utilize a API : https://api.postmon.com.br/v1/cep/{CEP}
// Exemplo CEP :https://api.postmon.com.br/v1/cep/89010020

const rs=require('readline-sync');
const axios=require('axios');

class Usuario {
    constructor(nome, cep) {
        this.nome = nome
        this.cep = cep
    }
}

let usuario = new Usuario('Maryalua', rs.question('Insira um CEP:'))

function buscaEndereco(cep) {
    const urlComCep=(`https://api.postmon.com.br/v1/cep/${cep}`);
        axios.get(urlComCep)
            .then(respostaDaApi => {
                console.log(`Rua: ${respostaDaApi.data.logradouro}`)
                console.log(`Bairro: ${respostaDaApi.data.bairro}`)
                console.log(`Cidade: ${respostaDaApi.data.cidade}`)
                console.log(`Estado: ${respostaDaApi.data.estado}`)
            })
            .catch(respostaDaApiQuandoDeuErro => {
                console.log(`Deu erro: ${respostaDaApiQuandoDeuErro}`)
            })


} buscaEndereco(usuario.cep)
