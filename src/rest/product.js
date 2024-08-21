const Router = require("@koa/router");
const productService = require("../service/product");

// GET /products
const getAllProducts = async (ctx) => {
  const {
    companyId,
    search,
    manufacturerId,
    productCategoryId,
    page = 1,
    limit = 10,
    sortBy = "name",
    sortOrder = "ASC",
  } = ctx.query;

  const productCategoryIds = productCategoryId
    ? productCategoryId.split(",").map((id) => id.trim())
    : null;
  const manufacturerIds = manufacturerId
    ? manufacturerId.split(",").map((id) => id.trim())
    : null;

  const filters = {
    companyId,
    search,
    manufacturerIds,
    productCategoryIds,
    page: parseInt(page, 10),
    limit: parseInt(limit, 10),
    sortBy,
    sortOrder,
  };

  ctx.body = await productService.getAll(filters);
};
const getProductById = async (ctx) => {
  ctx.body = await productService.getById(ctx.params.id);
};

// UPDATE /products/:id
const updateProductById = async (ctx) => {
  ctx.body = await productService.updateById(ctx.request.body);
};

// DELETE /products/:id
const deleteProductById = async (ctx) => {
  ctx.body = await productService.deleteById(ctx.params.id);
};

// CREATE /products
const createProduct = async (ctx) => {
  ctx.body = await productService.create(ctx.request.body);
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/products",
  });

  router.get("/", getAllProducts);
  router.get("/:id", getProductById);
  router.put("/:id", updateProductById);
  router.delete("/:id", deleteProductById);
  router.post("/", createProduct);

  app.use(router.routes()).use(router.allowedMethods());
};
