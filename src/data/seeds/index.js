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

const seedAll = async () => {
  try {
    seedProductCategories();
    seedPaymentStatuses();
    seedOrderPackagings();
    seedPaymentMethods();
    seedAccountTypes();
    seedOrderStatuses();
    seedAddresses();
    seedCompanies();
    seedAccounts();
    seedManufacturers();
    seedProducts();
    seedOrders();
    seedOrderItems();
  } catch (error) {
    console.error(error);
  }
};

module.exports = { seedAll };
