import { DataTypes } from "sequelize";
import db from "../config/db.js";

export const Usuario = db.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
    },
    confirmado: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: "usuario",
  }
);
