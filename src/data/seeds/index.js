const { seedCompanies } = require("./company.seeds");
const { seedAddresses } = require("./address.seeds");
const { seedAccounts } = require("./account.seeds");
const { seedAccountTypes } = require("./accountType.seeds");
const { seedOrderStatuses } = require("./orderStatus.seeds");
const { seedOrders } = require("./order.seeds");
const { seedPaymentMethods } = require("./paymentMethod.seeds");
const { seedOrderPackagings } = require("./orderPackaging.seeds");
const { seedPaymentStatuses } = require("./paymentStatus.seeds");
const { seedProductCategories } = require("./productCategory.seeds");
const { seedManufacturers } = require("./manufacturer.seeds");
const { seedProducts } = require("./product.seeds");
const { seedOrderItems } = require("./orderItem.seeds");
const { seedCompanyProducts } = require("./company_product.seeds");

const seedAll = async () => {
  try {
    await seedProductCategories();
    await seedPaymentStatuses();
    await seedOrderPackagings();
    await seedPaymentMethods();
    await seedAccountTypes();
    await seedOrderStatuses();
    await seedAddresses();
    await seedCompanies();
    await seedAccounts();
    await seedManufacturers();
    await seedProducts();
    await seedOrders();
    await seedOrderItems();
    await seedCompanyProducts();
  } catch (error) {
    console.error(error);
  }
};

module.exports = { seedAll };
