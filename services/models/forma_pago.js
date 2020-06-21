const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_forma_pago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_forma_pago"
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descripcion"
    }
  };
  const options = { timestamps: false,
    tableName: "forma_pago",
    comment: "",
    indexes: []
  };
  const FormaPagoModel = sequelize.define("forma_pago_model", attributes, options);
  return FormaPagoModel;
};