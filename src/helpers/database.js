const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("my_database", "my_user", "my_password", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => console.log("Conexão com o banco de dados bem-sucedida!"))
  .catch((err) => console.error("Erro ao conectar com o banco de dados:", err));

module.exports = sequelize;
