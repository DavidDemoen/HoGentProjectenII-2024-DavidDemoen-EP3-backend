const Router = require("@koa/router");
const manufacturerService = require("../service/manufacturer");
const Joi = require("joi");
const validate = require("../core/validation");

const getAllManufacturers = async (ctx) => {
  ctx.body = await manufacturerService.getAll();
};
const getManufacturerById = async (ctx) => {
  ctx.body = await manufacturerService.getById(Number(ctx.params.id));
};

getAllManufacturers.validationScheme = null;
getManufacturerById.validationScheme = {
  params: Joi.object({
    id: Joi.required(),
  }),
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/manufacturers",
  });

  router.get(
    "/",
    validate(getAllManufacturers.validationScheme),
    getAllManufacturers
  );
  router.get("/:id", getManufacturerById);

  app.use(router.routes()).use(router.allowedMethods());
};
