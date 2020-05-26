const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_estado_pedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_estado_pedido"
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
    color: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "color"
    }
  };
  const options = { timestamps: false,
    tableName: "estado_pedido",
    comment: "",
    indexes: []
  };
  const EstadoPedidoModel = sequelize.define("estado_pedido_model", attributes, options);
  return EstadoPedidoModel;
};