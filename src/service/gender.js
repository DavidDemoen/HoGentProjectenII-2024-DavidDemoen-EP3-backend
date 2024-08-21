const ServiceError = require("../core/serviceError");
const { Gender } = require("../data/models");
const handleDBError = require("./_handleDBError");

const getAll = async () => {
  const genders = await Gender.findAll();

  return { genders, count: genders.length };
};
const getById = async (id) => {
  try {
    const gender = await Gender.findByPk(id);
    if (!gender) {
      throw ServiceError.notFound(`Gender with id ${id} not found`, { id });
    }
    return { gender };
  } catch (error) {
    throw handleDBError(error);
  }
};

module.exports = { getAll, getById };
