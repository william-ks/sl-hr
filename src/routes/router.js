const { Router } = require("express");
const { viewsRouter } = require("./viewsRoutes");
const { apiRouter } = require("./apiRoutes");

const router = Router();

router.use(viewsRouter);
router.use(apiRouter);

module.exports = { router };
