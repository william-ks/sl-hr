const { Router } = require("express");
const { viewsRouter } = require("./viewsRoutes");
const { apiRouter } = require("./apiRoutes");

const router = Router();

router.use(viewsRouter);
router.use("/api", apiRouter);

module.exports = { router };
