const rs = require('readline-sync');
const axios = require('axios')
//const inputUsuario = rs.question ("Digite yes ou no: ");

axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
.then(res => {
        console.log(res)
    
});
