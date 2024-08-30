const Contract = require("../models/contracts");

const createContract = async (req, res) => {
  const { name, text, startAt, endAt, value, payment_date, category } =
    req.body;
  try {
    await Contract.create({
      name,
      text,
      startAt,
      endAt,
      value,
      payment_date,
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
