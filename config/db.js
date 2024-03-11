import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config({path: '.env'});

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USUARIO, process.env.DB_PASSWORD ?? '', {
  host: process.env.DB_HOST,
  dialect: "mysql",
  port: process.env.DB_PORT,
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
