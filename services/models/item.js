const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_item"
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre"
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descripcion"
    },
    valor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "valor"
    },
    imagen: {
      type: DataTypes.STRING(70),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "imagen"
    }
  };
  const options = { timestamps: false,
    tableName: "item",
    comment: "",
    indexes: []
  };
  const ItemModel = sequelize.define("item_model", attributes, options);
  return ItemModel;
};