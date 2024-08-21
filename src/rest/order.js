const Router = require("@koa/router");
const orderService = require("../service/order");
const Joi = require("joi");
const validate = require("../core/validation");

// GET /orders
const getAllOrders = async (ctx) => {
  const {
    sellerCompanyId,
    buyerAccountId,
    buyerCompanyId,
    date,
    status,
    search,
    searchDate,
    searchReferenceId,
    searchBuyerAccountName,
    searchOrderStatusName,
    page = 1,
    limit = 10,
    sortBy = "date",
    sortOrder = "DESC",
  } = ctx.query;

  const filters = {
    sellerCompanyId,
    buyerAccountId,
    buyerCompanyId,
    date,
    status,
    search,
    searchDate,
    searchReferenceId,
    searchBuyerAccountName,
    searchOrderStatusName,
    page: parseInt(page, 10),
    limit: parseInt(limit, 10),
    sortBy,
    sortOrder,
  };
  ctx.body = await orderService.getAll(filters);
};
const getOrderById = async (ctx) => {
  ctx.body = await orderService.getById(ctx.params.id);
};
const getOrdersBySellerCompanyId = async (ctx) => {
  ctx.body = await orderService.getBySellerCompanyId(ctx.params.id);
};
const getOrdersByBuyerAccountId = async (ctx) => {
  ctx.body = await orderService.getByBuyerAccountId(ctx.params.id);
};
const getOrdersBySellerCompanyIdToday = async (ctx) => {
  ctx.body = await orderService.getBySellerCompanyIdToday(ctx.params.id);
};
const getOrdersBySellerCompanyIdWeek = async (ctx) => {
  ctx.body = await orderService.getBySellerCompanyIdWeek(ctx.params.id);
};
const getOrdersBySellerCompanyIdRevenueToday = async (ctx) => {
  ctx.body = await orderService.getBySellerCompanyIdRevenueToday(ctx.params.id);
};
const getOrdersBySellerCompanyIdRevenueWeek = async (ctx) => {
  ctx.body = await orderService.getBySellerCompanyIdRevenueWeek(ctx.params.id);
};
const getOrdersByBuyerComanyId = async (ctx) => {
  const buyerCompanyId = ctx.params.id;

  ctx.body = await orderService.getByBuyerCompanyId(buyerCompanyId);
};

// POST /orders
const createOrder = async (ctx) => {
  const order = ctx.request.body;
  ctx.body = await orderService.create(order);
};

// PUT /orders/:id
const updateOrder = async (ctx) => {
  const id = ctx.params.id;
  const order = ctx.request.body;
  ctx.body = await orderService.updateById(id, order);
};

getAllOrders.validationScheme = null;
getOrderById.validationScheme = {
  params: Joi.object({
    id: Joi.required(),
  }),
};
createOrder.validationScheme = {
  body: {
    order_items: Joi.array().items(
      Joi.object({
        productId: Joi.required(),
        quantity: Joi.required(),
        transactionUnitPrice: Joi.required(),
        transactionDiscount: Joi.required(),
      })
    ),
    orderDiscount: Joi.required(),
    paymentMethodId: Joi.required(),
    orderPackagingId: Joi.required(),
    address: Joi.object({
      street: Joi.required(),
      number: Joi.required(),
      postalCode: Joi.required(),
      city: Joi.required(),
      country: Joi.required(),
    }),
    companyId: Joi.required(),
  },
};
updateOrder.validationScheme = {
  params: Joi.object({
    id: Joi.required(),
  }),
  body: {
    order_items: Joi.array().items(
      Joi.object({
        productId: Joi.required(),
        quantity: Joi.required(),
        transactionUnitPrice: Joi.required(),
        transactionDiscount: Joi.required(),
      })
    ),
    orderDiscount: Joi.required(),
    paymentMethodId: Joi.required(),
    orderPackagingId: Joi.required(),
    address: Joi.object({
      street: Joi.required(),
      number: Joi.required(),
      postalCode: Joi.required(),
      city: Joi.required(),
      country: Joi.required(),
    }),
    companyId: Joi.required(),
  },
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/orders",
  });

  router.get("/", getAllOrders);
  router.get("/:id", getOrderById);
  router.get("/company/:id", getOrdersBySellerCompanyId);
  router.get("/company/:id/today", getOrdersBySellerCompanyIdToday);
  router.get("/company/:id/week", getOrdersBySellerCompanyIdWeek);
  router.get(
    "/company/:id/revenue/today",
    getOrdersBySellerCompanyIdRevenueToday
  );
  router.get(
    "/company/:id/revenue/week",
    getOrdersBySellerCompanyIdRevenueWeek
  );
  router.get("/buyer/:id", getOrdersByBuyerAccountId);
  router.get("/buyer/company/:id", getOrdersByBuyerComanyId);

  router.post("/", createOrder);

  router.put("/:id", updateOrder);

  app.use(router.routes()).use(router.allowedMethods());
};
