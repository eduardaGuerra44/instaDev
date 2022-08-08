const {publicacao, sequelize} = require('../database/models');
let teste = async () => {
    let publicacoes = await publicacao.findAll();
    console.log(publicacoes.map(p => p.toJSON()));
    sequelize.close();
}

teste()