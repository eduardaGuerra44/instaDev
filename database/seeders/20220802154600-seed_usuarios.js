const bcrypt = require('bcrypt');
const usuarios = [
  {
    id: 1,
    nome: "Natália Cardoso da Silva",
    email: "natflix@gmail.com",
    senha: bcrypt.hashSync("12345", 10),
    foto: "nat.jpg"
  },
  {
    id: 2,
    nome: "Dxdxgu",
    email: "dxdx@gmail.com",
    senha: bcrypt.hashSync("12345", 10),
    foto: "dxdx.jpg"
  },
  {
    id:3,
    nome: "Mateus Giancott",
    email: "giancott@gmail.com",
    senha: bcrypt.hashSync("12345", 10),
    foto: "giancottNaPraia.jpg"
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('usuarios', usuarios, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
