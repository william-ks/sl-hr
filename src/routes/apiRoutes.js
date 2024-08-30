const { Router } = require("express");
const { createContract } = require("../controllers/createContract");

const apiRouter = Router();

apiRouter.post("/create-contract", createContract);

module.exports = { apiRouter };
