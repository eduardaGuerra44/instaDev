module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
      "curtida",
     { id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      usuarios_id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "usuarios"
          },
          key: "id"
        }


      },
      publicacoes_id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "publicacoes"
          },
          key: "id"
        }
      }
    },
      
      {
          tableName: 'curtidas',
          timestamps: false
      }
  )
}