const Router = require("@koa/router");
const categoryService = require("../service/productCategory");

const getAllCategories = async (ctx) => {
  ctx.body = await categoryService.getAll();
};
const getCategoryById = async (ctx) => {
  ctx.body = await categoryService.getById(ctx.params.id);
};

const createCategory = async (ctx) => {
  ctx.body = await categoryService.create(ctx.request.body);
};

const deleteCategoryById = async (ctx) => {
  ctx.body = await categoryService.deleteById(ctx.params.id);
};
const updateCategoryById = async (ctx) => {
  ctx.body = await categoryService.updateById(ctx.request.body);
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/productcategories",
  });

  router.get("/", getAllCategories);
  router.get("/:id", getCategoryById);
  router.post("/", createCategory);
  router.delete("/:id", deleteCategoryById);
  router.put("/:id", updateCategoryById);

  app.use(router.routes()).use(router.allowedMethods());
};
