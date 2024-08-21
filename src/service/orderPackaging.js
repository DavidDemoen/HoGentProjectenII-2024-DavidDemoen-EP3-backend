const { OrderPackaging } = require("../data/models");
const ServiceError = require("../core/serviceError");
const handleDBError = require("./_handleDBError");

const getAll = async () => {
  try {
    const orderPackagings = await OrderPackaging.findAll();

    return { orderPackagings, count: orderPackagings.length };
  } catch (error) {
    throw handleDBError(error);
  }
};
const getByName = async (name) => {
  try {
    const orderPackaging = await OrderPackaging.findOne({
      where: { name },
    });
    if (!orderPackaging) {
      throw ServiceError.notFound(
        `OrderPackaging with name ${name} not found`,
        { name }
      );
    }
    return { orderPackaging };
  } catch (error) {
    throw handleDBError(error);
  }
};

module.exports = {
  getAll,
  getByName,
};
