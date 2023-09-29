const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_SCHEMA,
  process.env.DB_USER,
  process.env.DB_PASSWORD,

  {
    dialect: "mysql",
    dialectModule: require("mysql2"),
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);

module.exports = sequelize;
