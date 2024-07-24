const Router = require("@koa/router");
const installCompanyRouter = require("./company");
const installOrderRouter = require("./order");
const installHealthRouter = require("./health");

module.exports = (app) => {
  const router = new Router({ prefix: "/api" });

  installCompanyRouter(router);
  installOrderRouter(router);
  installHealthRouter(router);

  app.use(router.routes()).use(router.allowedMethods());
};
