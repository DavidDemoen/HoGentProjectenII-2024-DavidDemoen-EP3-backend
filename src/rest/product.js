const Router = require("@koa/router");
const productService = require("../service/product");

// GET /products
const getAllProducts = async (ctx) => {
  ctx.body = await productService.getAll();
};
const getProductById = async (ctx) => {
  ctx.body = await productService.getById(Number(ctx.params.id));
};

// UPDATE /products/:id
const updateProductById = async (ctx) => {
  ctx.body = await productService.updateById(ctx.request.body);
};

// DELETE /products/:id
const deleteProductById = async (ctx) => {
  ctx.body = await productService.deleteById(Number(ctx.params.id));
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
