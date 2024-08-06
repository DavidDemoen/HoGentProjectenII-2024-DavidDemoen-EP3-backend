const { ProductCategory } = require("../data/models");

const getAll = async () => {
  try {
    const categories = await ProductCategory.findAll();
    if (categories.length === 0) {
      return { message: "No Productcategories found" };
    }
    return { categories, count: categories.length };
  } catch (error) {
    console.error(error);
  }
};
const getById = async (id) => {
  try {
    const category = await ProductCategory.findByPk(id);
    if (!category) {
      return { message: "Productcategory not found" };
    }
    return { category };
  } catch (error) {
    console.error(error);
  }
};
const create = async (data) => {
  try {
    const category = await ProductCategory.create(data);
    return category;
  } catch (error) {
    console.error(error);
  }
};
const deleteById = async (id) => {
  try {
    const category = await ProductCategory.findByPk(id);
    if (!category) {
      return { message: "Productcategory not found" };
    }
    await category.destroy();
    return { message: "Productcategory deleted" };
  } catch (error) {
    console.error(error);
  }
};
const updateById = async (data) => {
  try {
    const category = await ProductCategory.findByPk(data.id);
    if (!category) {
      return { message: "Productcategory not found" };
    }
    await category.update(data);
    return category;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  updateById,
};
