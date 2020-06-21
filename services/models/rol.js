const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_rol"
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
    tableName: "rol",
    comment: "",
    indexes: []
  };
  const RolModel = sequelize.define("rol_model", attributes, options);
  return RolModel;
};