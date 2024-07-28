const { seedCompanies } = require("./company.seeds");

const seedAll = async () => {
  try {
    await seedCompanies();
  } catch (error) {
    console.error(error);
  }
};

module.exports = { seedAll };
