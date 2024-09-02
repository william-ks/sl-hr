require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { router } = require("./routes/router");
const { apiRouter } = require("./routes/apiRoutes");
const db = require("./models/index");

app.use(express.json())

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);
app.use("/api", apiRouter);

db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "\x1b[31m%s\x1b[0m",
        `😎 [server]: is running! (☞ﾟヮﾟ)☞ http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) =>
    console.error("Erro ao sincronizar com o banco de dados:", err)
  );
