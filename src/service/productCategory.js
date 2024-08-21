const { ProductCategory } = require("../data/models");
const handleDBError = require("./_handleDBError");
const ServiceError = require("../core/serviceError");

const getAll = async () => {
  const categories = await ProductCategory.findAll();

  return { categories, count: categories.length };
};
const getById = async (id) => {
  try {
    const category = await ProductCategory.findByPk(id);
    if (!category) {
      throw ServiceError.notFound(`Productcategory with id ${id} not found`, {
        id,
      });
    }
    return { category };
  } catch (error) {
    throw handleDBError(error);
  }
};
const create = async (data) => {
  try {
    const category = await ProductCategory.create(data);
    return category;
  } catch (error) {
    throw handleDBError(error);
  }
};
const deleteById = async (id) => {
  try {
    const category = await ProductCategory.findByPk(id);
    if (!category) {
      throw ServiceError.notFound(`Productcategory with id ${id} not found`, {
        id,
      });
    }
    await category.destroy();
    return { message: "Productcategory deleted" };
  } catch (error) {
    throw handleDBError(error);
  }
};
const updateById = async (id, data) => {
  try {
    const category = await ProductCategory.findByPk(id);
    if (!category) {
      throw ServiceError.notFound(`Productcategory with id ${id} not found`, {
        id: data.id,
      });
    }
    await category.update(data);
    return category;
  } catch (error) {
    throw handleDBError(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
};
