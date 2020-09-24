const axios = require('axios')
const chalk = require('chalk')
const rs = require('readline-sync')
const log = console.log

const url = 'https://pokeapi.co/api/v2/pokemon/'

async function getPokemon(url, pokemon) {
    let {data} = await axios.get(url + pokemon)
    return data
}

async function showHabilidades(url) {
    let {data} = await axios.get(url)

    log(chalk.bold("\nNome da habilidade: ") + chalk.greenBright(" " + data.name.toUpperCase()))

    data.effect_entries.forEach(obj => {
        if(obj.language.name == 'en')
        log(chalk.bold("Efeito principal:") + " " + chalk.blue.bgBlack(obj.effect))
        log(chalk.bold("\nEfeito secundário:") + " " + chalk.blue.bgBlack(obj.short_effect))
    })

}

async function showType(url) {
    let {data} = await axios.get(url)

    log(chalk.bold("\nTipo: ") + chalk.blueBright.bold(data.name.toUpperCase()))

    data.damage_relations.no_damage_to.forEach(obj => log(chalk.bold("Não causa dano em: ") + chalk.redBright(obj.name.toUpperCase())))

    log(chalk.bold("\nCausa metade do dano em: "))
    data.damage_relations.half_damage_to.forEach(obj => log(chalk.blueBright(obj.name.toUpperCase())))

    log(chalk.bold("\nCausa o dobro do dano em: "))
    data.damage_relations.double_damage_to.forEach(obj => log(chalk.greenBright(obj.name.toUpperCase())))

    let pokemons = data.pokemon.map(pokemonName => pokemonName.pokemon.name)
    log(chalk.bold("\nPokemons com o mesmo tipo: ") + chalk.cyan(pokemons.join(', ')))

}

async function habilidades(pokemonEscolhido) {
    pokemonEscolhido.abilities.forEach((habilidade) => {
        showHabilidades(habilidade.ability.url)
    })
}

async function tipo(pokemonEscolhido) {
    pokemonEscolhido.types.forEach((tipo) => {
        showType(tipo.type.url)
    })
}

async function principal() {
    let nomePokemon = rs.question(chalk.bold('Digite o nome ou o ID de um Pokemon: '))
    
    let pokemonEscolhido = await getPokemon(url, nomePokemon)
    
    await habilidades(pokemonEscolhido)
    
    await tipo(pokemonEscolhido)
}

principal()