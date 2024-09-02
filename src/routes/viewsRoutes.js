const { Router } = require("express");

const viewsRouter = Router();

viewsRouter.get("/create-contract", async (req, res) => {

  res.render("createContract");
});

viewsRouter.get("/manage-contracts", async (req, res) => {
  try {
    res.render("manageContracts", {});
  } catch (error) {
    res.status(500).send("Erro ao carregar contratos");
  }
});

module.exports = { viewsRouter };
