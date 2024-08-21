const { Address } = require("../data/models");
const ServiceError = require("../core/serviceError");
const handleDBError = require("./_handleDBError");

const getAll = async () => {
  const addresses = await Address.findAll();
  return { addresses, count: addresses.length };
};
const getById = async (id) => {
  try {
    const address = await Address.findByPk(id);
    if (!address) {
      throw ServiceError.notFound(`Address with id ${id} not found`, { id });
    }
    return { address };
  } catch (error) {
    throw handleDBError(error);
  }
};
const updateById = async (id, address) => {
  try {
    const updatedAddress = await Address.update(address, {
      where: { id },
    });
    if (updatedAddress[0] === 0) {
      throw ServiceError.notFound(`Address with id ${id} not found`, { id });
    }
    return getById(id);
  } catch (error) {
    throw handleDBError(error);
  }
};

module.exports = { getAll, getById, updateById };
