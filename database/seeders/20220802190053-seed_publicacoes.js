const publicacoes = [
  {
    id: 1, 
    texto: "Fazendo caminhada na praia",
    usuarios_id: 3, 
    imagem: "caminhandoNaPraia.jpg"
  },
  {
    id: 2, 
    texto: "Assistindo Filme #Netflix",
    usuarios_id: 1, 
    imagem: "netflix.jpg"
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('publicacoes', publicacoes, {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('publicacoes', null, {});
     
  }
};
