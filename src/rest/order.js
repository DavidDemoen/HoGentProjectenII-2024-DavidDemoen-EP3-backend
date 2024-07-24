const Router = require("@koa/router");
const orderService = require("../service/order");

const getAllOrders = async (ctx) => {
  ctx.body = orderService.getAll();
};
const getOrderById = async (ctx) => {
  ctx.body = orderService.getById(Number(ctx.params.id));
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/orders",
  });

  router.get("/", getAllOrders);
  router.get("/:id", getOrderById);

  app.use(router.routes()).use(router.allowedMethods());
};
