const { Account } = require("../data/models");

const getAll = async () => {
  try {
    const accounts = await Account.findAll();
    return { accounts, count: accounts.length };
  } catch (error) {
    console.error(error);
  }
};
const getById = async (id) => {
  try {
    const account = await Account.findByPk(id);
    if (!account) {
      throw new Error("Account not found");
    }
    return account;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getAll, getById };
