const { Company } = require("../models");

const companyProducts = [];

const populateCompanyProducts = async () => {
  for (let i = 1; i <= 100; i++) {
    companyProducts.push({
      company_id: 13,
      product_id: i,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }
  companyProducts.push({
    company_id: 1,
    product_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  });
};

const seedCompanyProducts = () => {
  populateCompanyProducts();
  Company.sequelize
    .getQueryInterface()
    .bulkInsert("company_product", companyProducts);
};

module.exports = { seedCompanyProducts };
