const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_permiso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id_permiso"
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
    recurso: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "recurso"
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "id_rol",
      references: {
        key: "id_rol",
        model: "rol_model"
      }
    }
  };
  const options = { timestamps: false,
    tableName: "permiso",
    comment: "",
    indexes: [{
      name: "fk_Permisos_Roles1_idx",
      unique: false,
      type: "BTREE",
      fields: ["id_rol"]
    }]
  };
  const PermisoModel = sequelize.define("permiso_model", attributes, options);
  return PermisoModel;
};