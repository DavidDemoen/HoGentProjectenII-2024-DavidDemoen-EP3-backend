const { Manufacturer } = require("../data/models");

const getAll = async () => {
  try {
    const manufacturers = await Manufacturer.findAll();
    if (manufacturers.length === 0) {
      return { message: "No manufacturers found" };
    }
    return { manufacturers, count: manufacturers.length };
  } catch (error) {
    console.error(error);
  }
};
const getById = async (id) => {
  try {
    const manufacturer = await Manufacturer.findByPk(id);
    if (!manufacturer) {
      return { message: "Manufacturer not found" };
    }
    return { manufacturer };
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAll,
  getById,
};
