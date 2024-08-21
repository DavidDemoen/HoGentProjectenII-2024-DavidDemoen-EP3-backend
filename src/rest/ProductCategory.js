const Router = require("@koa/router");
const categoryService = require("../service/productCategory");
const Joi = require("joi");
const validate = require("../core/validation");

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
  const id = ctx.params.id;
  const data = ctx.request.body;
  ctx.body = await categoryService.updateById(id, data);
};

getAllCategories.validationScheme = null;
getCategoryById.validationScheme = {
  params: Joi.object({
    id: Joi.required(),
  }),
};
createCategory.validationScheme = {
  // body: Joi.object({
  //   name: Joi.string().required(),
  //   description: Joi.string().required(),
  // }),
};
deleteCategoryById.validationScheme = {
  params: Joi.object({
    id: Joi.required(),
  }),
};
updateCategoryById.validationScheme = {
  // body: Joi.object({
  //   name: Joi.string().required(),
  //   description: Joi.string().required(),
  // }),
  // params: Joi.object({
  //   id: Joi.required(),
  // }),
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/productcategories",
  });

  router.get(
    "/",
    validate(getAllCategories.validationScheme),
    getAllCategories
  );
  router.get(
    "/:id",
    validate(getCategoryById.validationScheme),
    getCategoryById
  );
  router.post(
    "/",
    // validate(createCategory.validationScheme),
    createCategory
  );
  router.delete(
    "/:id",
    validate(deleteCategoryById.validationScheme),
    deleteCategoryById
  );
  router.put(
    "/:id",
    //validate(updateCategoryById.validationScheme),
    updateCategoryById
  );

  app.use(router.routes()).use(router.allowedMethods());
};
