const amizades = [
  {
    id: 1,
    usuarios_id1: 1,
    usuarios_id2: 3,
    aceita: true
  }
]
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('amizades', amizades, {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('amizades', null, {});
  }
};
