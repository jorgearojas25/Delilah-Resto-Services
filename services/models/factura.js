const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_factura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_factura"
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cantidad"
    },
    valor_total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "valor_total"
    },
    id_pedidos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "id_pedidos",
      references: {
        key: "id_pedido",
        model: "pedido_model"
      }
    },
    id_items: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "id_items",
      references: {
        key: "id_item",
        model: "item_model"
      }
    }
  };
  const options = { timestamps: false,
    tableName: "factura",
    comment: "",
    indexes: [{
      name: "fk_Factura_Pedidos1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_pedidos"]
    }, {
      name: "fk_Factura_Items1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_items"]
    }]
  };
  const FacturaModel = sequelize.define("factura_model", attributes, options);
  return FacturaModel;
};