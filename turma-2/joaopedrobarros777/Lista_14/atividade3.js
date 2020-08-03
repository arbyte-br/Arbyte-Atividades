const rs = require("readline-sync")

const axios = require("axios")

let numeroDoEpisodeo = rs.question("digite um numero para conhecer um episodeo de Breaking Bad:\n")

let url = `https://www.breakingbadapi.com/api/episodes/${numeroDoEpisodeo}`


function episodeo() {
    axios.get(url)
    .then(res => {
        console.log("Elenco: " + res.data[0].characters)
        console.log("Temporada: " + res.data[0].season)
    })
    .catch(error => {
        console.log(error)
    })
}

episodeo()