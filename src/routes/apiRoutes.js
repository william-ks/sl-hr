const { Router } = require("express");
const { createContract } = require("../controllers/createContract");
const { listContract } = require("../controllers/listContract");

const apiRouter = Router();

apiRouter.post("/create-contract", createContract);

apiRouter.get("/list-contracts", listContract);

module.exports = { apiRouter };
