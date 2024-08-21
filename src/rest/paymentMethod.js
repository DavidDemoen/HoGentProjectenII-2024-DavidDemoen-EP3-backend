const Router = require("@koa/router");
const paymentMethodService = require("../service/paymentMethod");
const validate = require("../core/validation");

const getAllPaymentMethods = async (ctx) => {
  ctx.body = await paymentMethodService.getAll();
};

getAllPaymentMethods.validationScheme = null;

module.exports = (app) => {
  const router = new Router({
    prefix: "/paymentMethods",
  });

  router.get(
    "/",
    validate(getAllPaymentMethods.validationScheme),
    getAllPaymentMethods
  );

  app.use(router.routes()).use(router.allowedMethods());
};
