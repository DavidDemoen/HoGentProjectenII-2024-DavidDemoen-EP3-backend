const { Account, Gender } = require("../data/models");
const { hashPassword, verifyPassword } = require("../core/password");
const { generateJWT } = require("../core/jwt");
const ServiceError = require("../core/serviceError");
const handleDBError = require("./_handleDBError");

//CREATE
const create = async ({
  first_name,
  last_name,
  phone,
  email,
  password,
  companyId,
  accountTypeName,
  genderId,
  addressId,
}) => {
  try {
    const account = await Account.create({
      first_name,
      last_name,
      phone,
      email,
      password: await hashPassword(password),
      companyId,
      accountTypeName,
      genderId,
      addressId,
    });
    return { account };
  } catch (error) {
    console.error(error);
  }
};

//LOGIN
const makeExposedAccount = ({
  id,
  first_name,
  last_name,
  phone,
  email,
  companyId,
  accountTypeName,
  genderId,
  addressId,
}) => ({
  id,
  first_name,
  last_name,
  phone,
  email,
  companyId,
  accountTypeName,
  genderId,
  addressId,
});
const makeLoginData = async (account) => {
  const token = await generateJWT(account);
  return {
    account: makeExposedAccount(account),
    token,
  };
};

const login = async (email, password) => {
  const account = await Account.findOne({ where: { email } });
  if (!account) {
    throw new Error("email and password do not match");
  }
  const passwordValid = await verifyPassword(password, account.password);

  if (!passwordValid) {
    throw new Error("email and password do not match");
  }
  return await makeLoginData(account);
};

// READ
const getAll = async () => {
  const accounts = await Account.findAll();
  return { accounts, count: accounts.length };
};
const getById = async (id) => {
  try {
    const account = await Account.findByPk(id, {
      include: [
        {
          model: Gender,
          as: "gender",
        },
      ],
    });
    if (!account) {
      throw ServiceError.notFound(`Account with id ${id} not found`, { id });
    }
    return { account };
  } catch (error) {
    throw handleDBError(error);
  }
};

module.exports = { getAll, getById, login, create };
