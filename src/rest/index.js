const Router = require("@koa/router");
const installCompanyRouter = require("./company");
const installOrderRouter = require("./order");
const installHealthRouter = require("./health");
const installAccountRouter = require("./account");
const installProductRouter = require("./product");
const installManufacturerRouter = require("./manufacturer");
const installProductCategoryRouter = require("./ProductCategory");

module.exports = (app) => {
  const router = new Router({ prefix: "/api" });

  installCompanyRouter(router);
  installOrderRouter(router);
  installHealthRouter(router);
  installAccountRouter(router);
  installProductRouter(router);
  installManufacturerRouter(router);
  installProductCategoryRouter(router);

  app.use(router.routes()).use(router.allowedMethods());
};
