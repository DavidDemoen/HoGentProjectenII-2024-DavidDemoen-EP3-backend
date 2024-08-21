const Router = require("@koa/router");
const orderPackagingService = require("../service/orderPackaging");
const Joi = require("joi");
const validate = require("../core/validation");

const getAllOrderPackagings = async (ctx) => {
  ctx.body = await orderPackagingService.getAll();
};
const getOrderPackagingByName = async (ctx) => {
  ctx.body = await orderPackagingService.getByName(ctx.params.name);
};

getAllOrderPackagings.validationScheme = null;
getOrderPackagingByName.validationScheme = {
  params: Joi.object({
    name: Joi.required(),
  }),
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/orderPackagings",
  });

  router.get("/", validate(getAllOrderPackagings.validationScheme), getAllOrderPackagings);
  router.get("/:name", validate(getOrderPackagingByName.validationScheme), getOrderPackagingByName);

  app.use(router.routes()).use(router.allowedMethods());
};
