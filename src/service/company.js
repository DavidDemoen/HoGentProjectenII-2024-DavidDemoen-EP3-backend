const { Company, Account, Address } = require("../data/models");

const getAll = async () => {
  try {
    const companies = await Company.findAll();
    return { companies, count: companies.length };
  } catch (error) {
    console.error(error);
  }
};
const getById = async (id) => {
  try {
    const company = await Company.findByPk(id, {
      include: [
        {
          model: Account,
          as: "accounts",
          include: [
            {
              model: Address,
              as: "accountAddress",
            },
          ],
        },
      ],
    });
    if (!company) {
      throw new Error("Company not found");
    }
    return company;
  } catch (error) {
    console.error(error);
  }
};
const getProductsByCompanyId = async (companyId) => {
  const company = await getById(companyId);
  if (company) {
    const products = await company.getProducts();
    if (products.length === 0) {
      return { message: "No products found" };
    }
    return { products: products, count: products.length };
  }
};

module.exports = {
  getAll,
  getById,
  getProductsByCompanyId,
};
