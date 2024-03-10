import { Sequelize } from "sequelize";

const sequelize = new Sequelize("bienesraicesnode", "root", "71916352", {
  host: "localhost",
  dialect: "mysql",
  port: "3306",
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorsAliases: false,
  dialectOptions: {
    options: {
      encrypt: true,
    },
  },
});

export default sequelize;
