const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_usuario_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_usuario_item"
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "id_usuario",
      references: {
        key: "id_usuario",
        model: "usuario_model"
      }
    },
    id_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "id_item",
      references: {
        key: "id_item",
        model: "item_model"
      }
    }
  };
  const options = { timestamps: false,
    tableName: "usuario_item",
    comment: "",
    indexes: [{
      name: "fk_UsuariosItems_Usuarios1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_usuario"]
    }, {
      name: "fk_UsuariosItems_Items1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_item"]
    }]
  };
  const UsuarioItemModel = sequelize.define("usuario_item_model", attributes, options);
  return UsuarioItemModel;
};