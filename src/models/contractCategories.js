const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/database");

const ContractCategories = sequelize.define("ContractCategories", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = ContractCategories;
