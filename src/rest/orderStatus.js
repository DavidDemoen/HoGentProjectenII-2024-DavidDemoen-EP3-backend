const Router = require("@koa/router");
const orderStatusService = require("../service/orderStatus");
const Joi = require("joi");
const validate = require("../core/validation");

const getAllOrderStatuses = async (ctx) => {
  ctx.body = await orderStatusService.getAll();
};

getAllOrderStatuses.validationScheme = null;

module.exports = (app) => {
  const router = new Router({
    prefix: "/orderStatuses",
  });

  router.get(
    "/",
    validate(getAllOrderStatuses.validationScheme),
    getAllOrderStatuses
  );

  app.use(router.routes()).use(router.allowedMethods());
};
