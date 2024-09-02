const Contract = require("../models/contracts");

const createContract = async (req, res) => {
  const {
    name,
    text,
    value,
    validity_start,
    validity_end,
    paymentDate,
    category,
  } = req.body;

  if (
    !name ||
    !text ||
    !value ||
    !validity_start ||
    !validity_end ||
    !paymentDate ||
    !category
  ) {
    return res.status(400).json("Error ao cadastrar um novo contrato.");
  }

  try {
    await Contract.create({
      name,
      text,
      value,
      validity_start,
      validity_end,
      paymentDate,
      category,
    });

    return res.status(201).end();
  } catch (e) {
    return res.status(404).json({
      message: "Error ao criar contrato.",
    });
  }
};

module.exports = { createContract };
