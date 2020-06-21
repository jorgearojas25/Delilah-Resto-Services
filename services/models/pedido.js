const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_pedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_pedido"
    },
    valor_total: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "valor_total"
    },
    fecha_pedido: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "fecha_pedido"
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
    id_estado_pedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "id_estado_pedido",
      references: {
        key: "id_estado_pedido",
        model: "estado_pedido_model"
      }
    },
    id_formas_pago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "id_formas_pago",
      references: {
        key: "id_forma_pago",
        model: "forma_pago_model"
      }
    }
  };
  const options = { timestamps: false,
    tableName: "pedido",
    comment: "",
    indexes: [{
      name: "fk_Pedidos_Usuarios_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_usuario"]
    }, {
      name: "fk_Pedidos_EstadosPedido1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_estado_pedido"]
    }, {
      name: "fk_Pedidos_FormasPago1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_formas_pago"]
    }]
  };
  const PedidoModel = sequelize.define("pedido_model", attributes, options);
  return PedidoModel;
};