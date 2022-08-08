const {curtida} = require('../database/models');
let teste = async () => {
    let curtidas = await curtida.findAll();
    console.log(curtidas);
}

teste()