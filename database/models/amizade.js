module.exports = (Sequelize, DataTypes) => {
  return Sequelize.define(
      "amizade",
     { 
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true
      },
      usuarios_id1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: "usuarios"
          },
          key: "id"
        }
      },
      usuarios_id2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: "usuarios"
          },
          key: "id"
        }
      },

      aceita: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    },
      
      {
          tableName: 'amizades',
          timestamps: false
      }
  )
}