const { CompanyProduct } = require("../models");

const companyProducts = [];

const populateCompanyProducts = async () => {
  for (let i = 1; i <= 100; i++) {
    companyProducts.push({
      companyId: 13,
      productId: i,
      created_at: new Date(),
      updated_at: new Date(),
      stock: Math.floor(Math.random() * 100),
    });
  }
  for (let i = 1; i <= 10; i++) {
    companyProducts.push({
      companyId: 1,
      productId: i,
      created_at: new Date(),
      updated_at: new Date(),
      stock: Math.floor(Math.random() * 100),
    });
  }
};

const seedCompanyProducts = () => {
  populateCompanyProducts();
  return CompanyProduct.bulkCreate(companyProducts);
};

module.exports = { seedCompanyProducts };
