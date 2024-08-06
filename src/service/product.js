const {
  Product,
  Company,
  Manufacturer,
  ProductCategory,
} = require("../data/models");

// GET /products
const getAll = async () => {
  try {
    const products = await Product.findAll();
    return { products, count: products.length };
  } catch (error) {
    return { message: "" };
  }
};
const getById = async (id) => {
  try {
    const product = await Product.findByPk(id, {
      include: [
        {
          model: Company,
        },
      ],
    });
    if (!product) {
      return { message: "Product not found" };
    }
    return { product };
  } catch (error) {
    return { message: "" };
  }
};

// UPDATE /products/:id
const updateById = async (data) => {
  const { id, manufacturerId, productCategoryId } = data;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return { message: "Product not found" };
    }
    const manufacturer = await Manufacturer.findByPk(manufacturerId);
    if (!manufacturer) {
      return { message: "Manufacturer not found" };
    }
    const category = await ProductCategory.findByPk(productCategoryId);
    if (!category) {
      return { message: "Category not found" };
    }
    await product.update(data);
    return { product };
  } catch (error) {
    return { message: "" };
  }
};
// DELETE /products/:id
const deleteById = async (id) => {
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return { message: "Product not found" };
    }
    await product.destroy();
    return { message: "Product deleted" };
  } catch (error) {
    return { message: "" };
  }
};
// CREATE /products
const create = async (data) => {
  console.log(data);
  const { manufacturerId, productCategoryId, addToShop, companyId } = data;
  try {
    const manufacturer = await Manufacturer.findByPk(manufacturerId);
    if (!manufacturer) {
      return { message: "Manufacturer not found" };
    }
    const category = await ProductCategory.findByPk(productCategoryId);
    if (!category) {
      return { message: "Category not found" };
    }
    const product = await Product.create(data);
    console.log(product);

    if (addToShop) {
      product.addCompany(Number(companyId));
    }
    return { product };
  } catch (error) {
    return { message: "" };
  }
};

module.exports = {
  getAll,
  getById,
  updateById,
  deleteById,
  create,
};
