import { DataTypes } from "sequelize";
import db from "../config/db.js";

export const Usuario = db.define(
  "usuarios",
  {
    // id
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // nombre
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // email
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // password
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // token para verificar la cuenta
    token: {
      type: DataTypes.STRING,
    },
    // confirmado o no por el usuario
    confirmado: {
      type: DataTypes.BOOLEAN,
    },
    // creado
    createdAt: {
      type: DataTypes.DATE,
    },
    // actualizado
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
    tableName: "usuarios",
  }
);
