const { DataTypes } = require("sequelize");
const sequelize = require("../helpers/database");

const Contract = sequelize.define("Contract", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  validity_start: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  validity_end: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Contract;
