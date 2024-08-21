const { get } = require("config");
const ServiceError = require("../core/serviceError");
const { Company, Account, Address } = require("../data/models");
const handleDBError = require("./_handleDBError");

const getAll = async () => {
  const companies = await Company.findAll();
  return { companies, count: companies.length };
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
      throw ServiceError.notFound(`Company with id ${id} not found`, { id });
    }
    return { company };
  } catch (error) {
    throw handleDBError(error);
  }
};
const getProductsByCompanyId = async (companyId) => {
  try {
    const { company } = await getById(companyId);

    if (!company) {
      throw ServiceError.notFound(`Company with id ${id} not found`, {
        companyId,
      });
    }
    const products = await company.getProducts();

    return { products: products, count: products.length };
  } catch (error) {
    throw handleDBError(error);
  }
};
const getCompaniesWithActiveShop = async () => {
  const companies = await Company.findAll({
    where: { has_shop: true },
  });
  return { companies, count: companies.length };
};
const getFilteredProducts = async (companyId, filter) => {
  const products = await getProductsByCompanyId(companyId);
};
const getPurchasersByCompanyId = async (companyId) => {
  try {
    const { company } = await getById(companyId);
    if (!company) {
      throw ServiceError.notFound(`Company with id ${id} not found`, {
        companyId,
      });
    }
    const purchasers = await company.getAccounts({
      where: { accountTypeName: "PURCHASER" },
    });
    return { purchasers: purchasers, count: purchasers.length };
  } catch (error) {
    throw handleDBError(error);
  }
};
const getProductStockFromCompany = async (companyId, productId) => {
  try {
    const { company } = await getById(companyId);
    if (!company) {
      throw ServiceError.notFound(`Company with id ${id} not found`, {
        companyId,
      });
    }
    const product = await company.getProducts({
      where: { id: productId },
      through: { attributes: ["stock"] },
    });
    if (!product) {
      throw ServiceError.notFound(`Product with id ${id} not found`, {
        productId,
      });
    }
    const stock = product[0].CompanyProduct.stock;
    return { stock: stock, productId: productId, companyId: companyId };
  } catch (error) {
    throw handleDBError(error);
  }
};

module.exports = {
  getAll,
  getById,
  getProductsByCompanyId,
  getFilteredProducts,
  getCompaniesWithActiveShop,
  getPurchasersByCompanyId,
  getProductStockFromCompany,
};
