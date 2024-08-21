const Router = require("@koa/router");
const installCompanyRouter = require("./company");
const installOrderRouter = require("./order");
const installHealthRouter = require("./health");
const installAccountRouter = require("./account");
const installProductRouter = require("./product");
const installManufacturerRouter = require("./manufacturer");
const installProductCategoryRouter = require("./productCategory");
const installAddressRouter = require("./address");
const installGenderRouter = require("./gender");
const installOrderPackagingRouter = require("./orderPackaging");
const installPaymentMethodRouter = require("./paymentMethod");
const installOrderStatusRouter = require("./orderStatus");
const installPaymentStatusRouter = require("./paymentStatus");

module.exports = (app) => {
  const router = new Router({ prefix: "/api" });

  installCompanyRouter(router);
  installOrderRouter(router);
  installHealthRouter(router);
  installAccountRouter(router);
  installProductRouter(router);
  installManufacturerRouter(router);
  installProductCategoryRouter(router);
  installAddressRouter(router);
  installGenderRouter(router);
  installOrderPackagingRouter(router);
  installPaymentMethodRouter(router);
  installOrderStatusRouter(router);
  installPaymentStatusRouter(router);

  app.use(router.routes()).use(router.allowedMethods());
};
