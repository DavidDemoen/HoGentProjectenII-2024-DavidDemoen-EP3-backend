const { Manufacturer } = require("../data/models");
const ServiceError = require("../core/serviceError");
const handleDBError = require("./_handleDBError");

const getAll = async () => {
  const manufacturers = await Manufacturer.findAll();

  return { manufacturers, count: manufacturers.length };
};
const getById = async (id) => {
  try {
    const manufacturer = await Manufacturer.findByPk(id);
    if (!manufacturer) {
      throw ServiceError.notFound(`Manufacturer with id ${id} not found`, {
        id,
      });
    }
    return { manufacturer };
  } catch (error) {
    throw handleDBError(error);
  }
};

module.exports = {
  getAll,
  getById,
};
