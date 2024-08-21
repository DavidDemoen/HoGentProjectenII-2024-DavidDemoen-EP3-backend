const { PaymentStatus } = require("../data/models");

const getAll = async () => {
  const paymentStatuses = await PaymentStatus.findAll();
  return { paymentStatuses, count: paymentStatuses.length };
};

module.exports = { getAll };
