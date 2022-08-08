const {amizade} = require('../database/models');
let teste = async () => {
    let amizades = await amizade.findAll();
    console.log(amizades);
}

teste()