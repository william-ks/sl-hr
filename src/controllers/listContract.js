const db = require("../models/index");
const Contract = db.Contract;

const listContract = async (req, res) => {
  try {
    const contractsData = await Contract.findAll();

    return res.status(200).json(contractsData);
  } catch (e) {
    return res.status(500).json({
      message: "Erro interno no servidor.",
    });
  }
};

module.exports = { listContract };
