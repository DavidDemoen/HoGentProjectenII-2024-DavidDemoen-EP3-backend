let { ORDERS } = require("../data/mock_data");

const getAll = () => {
  return { items: ORDERS, count: ORDERS.length };
};
const getById = (id) => {
  const order = ORDERS.find((order) => order.id == id);
  return order;
};

module.exports = {
  getAll,
  getById,
};
