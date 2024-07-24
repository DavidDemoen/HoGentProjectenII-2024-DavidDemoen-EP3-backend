let { COMPANIES } = require("../data/mock_data");

const getAll = () => {
  return { items: COMPANIES, count: COMPANIES.length };
};
const getById = (id) => {
  const company = COMPANIES.find((company) => company.id == id);
  return company;
};

module.exports = {
  getAll,
  getById,
};