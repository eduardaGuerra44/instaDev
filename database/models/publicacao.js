module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
      "publicacao",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        texto: {
          type: DataTypes.STRING(120),
          allowNull: true
        },
        usuarios_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        imagem: {
          type: DataTypes.STRING(45),
          allowNull: false
        }
      },
      
      {
          tableName: 'publicacoes',
          timestamps: false
      }
  )
}