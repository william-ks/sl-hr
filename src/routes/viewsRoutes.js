const { Router } = require("express");
const ContractCategories = require("../models/contractCategories");

const viewsRouter = Router();

viewsRouter.get("/create-contract", async (req, res) => {
  const categories = await ContractCategories.findAll();

  res.render("createContract", { categories });
});

viewsRouter.get("/manage-contracts", async (req, res) => {
  try {
    // const categoriesSum = await Contract.sumByCategory();
    // const contracts = await Contract.findAll();
    res.render("manageContracts", { categoriesSum, contracts });
  } catch (error) {
    res.status(500).send("Erro ao carregar contratos");
  }
});

module.exports = { viewsRouter };
