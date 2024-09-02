const { Router } = require("express");
const { createContract } = require("../controllers/createContract");

const apiRouter = Router();

apiRouter.post("/create-contract", createContract);

apiRouter.get("/list-contracts", createContract);

module.exports = { apiRouter };
