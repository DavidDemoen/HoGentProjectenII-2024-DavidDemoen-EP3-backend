const {
  Product,
  Company,
  Manufacturer,
  ProductCategory,
  CompanyProduct,
} = require("../data/models");
const { Op } = require("sequelize");

// GET /products
const getAll = async (filters) => {
  const {
    companyId,
    search,
    manufacturerIds,
    productCategoryIds,
    page,
    limit,
    sortBy,
    sortOrder,
  } = filters;

  const whereClause = {};

  if (manufacturerIds && manufacturerIds.length > 0)
    whereClause.manufacturerId = { [Op.in]: manufacturerIds };
  if (productCategoryIds && productCategoryIds.length > 0)
    whereClause.productCategoryId = { [Op.in]: productCategoryIds };
  if (search) {
    whereClause[Op.or] = [
      { name: { [Op.like]: `%${search}%` } },
      { description: { [Op.like]: `%${search}%` } },
    ];
  }
  try {
    const products = await Product.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: Company,
          where: { id: companyId },
        },
        {
          model: Manufacturer,
        },
        {
          model: ProductCategory,
        },
      ],
      limit,
      offset: (page - 1) * limit,
      order: [[sortBy, sortOrder]],
    });
    return {
      products: products.rows,
      count: products.rows.length,
      totalItems: products.count,
      pagination: {
        page,
        totalItems: products.count,
        totalPages: Math.ceil(products.count / limit),
        limit,
      },
    };
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
        {
          model: Manufacturer,
        },
        {
          model: ProductCategory,
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
  const { id, manufacturerId, productCategoryId, companyId, stock } = data;
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

    const company = await Company.findByPk(companyId);
    if (!company) {
      return { message: "Company not found" };
    }

    const companyProduct = await CompanyProduct.findOne({
      where: { companyId, productId: id },
    });
    if (!companyProduct) {
      await company.addProduct(product, { through: { stock } });
    }
    await companyProduct.update({ stock });
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
  const { manufacturerId, productCategoryId, addToShop, companyId, stock } =
    data;
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
      product.addCompany(companyId, { through: { stock } });
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
