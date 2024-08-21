const { OrderStatus } = require("../data/models");

const getAll = async () => {
  const orderStatuses = await OrderStatus.findAll();
  return { orderStatuses, count: orderStatuses.length };
};

module.exports = { getAll };
