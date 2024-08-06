const Router = require("@koa/router");
const orderService = require("../service/order");

// GET /orders
const getAllOrders = async (ctx) => {
  ctx.body = await orderService.getAll();
};
const getOrderById = async (ctx) => {
  ctx.body = await orderService.getById(Number(ctx.params.id));
};
const getOrdersBySellerAccountId = async (ctx) => {
  ctx.body = await orderService.getBySellerAccountId(Number(ctx.params.id));
};
const getOrdersBySellerAccountIdToday = async (ctx) => {
  ctx.body = await orderService.getBySellerAccountIdToday(
    Number(ctx.params.id)
  );
};
const getOrdersBySellerAccountIdWeek = async (ctx) => {
  ctx.body = await orderService.getBySellerAccountIdWeek(Number(ctx.params.id));
};
const getOrdersBySellerAccountIdRevenueToday = async (ctx) => {
  ctx.body = await orderService.getBySellerAccountIdRevenueToday(
    Number(ctx.params.id)
  );
};
const getOrdersBySellerAccountIdRevenueWeek = async (ctx) => {
  ctx.body = await orderService.getBySellerAccountIdRevenueWeek(
    Number(ctx.params.id)
  );
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/orders",
  });

  router.get("/", getAllOrders);
  router.get("/:id", getOrderById);
  router.get("/account/:id", getOrdersBySellerAccountId);
  router.get("/account/:id/today", getOrdersBySellerAccountIdToday);
  router.get("/account/:id/week", getOrdersBySellerAccountIdWeek);
  router.get(
    "/account/:id/revenue/today",
    getOrdersBySellerAccountIdRevenueToday
  );
  router.get(
    "/account/:id/revenue/week",
    getOrdersBySellerAccountIdRevenueWeek
  );

  app.use(router.routes()).use(router.allowedMethods());
};
