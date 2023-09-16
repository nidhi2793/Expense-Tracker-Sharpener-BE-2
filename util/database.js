const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "expense_tracker_website",
  "root",
  "Nidhi@1993",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
