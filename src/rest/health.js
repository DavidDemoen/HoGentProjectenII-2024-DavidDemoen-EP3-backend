const Router = require("@koa/router");
const healthService = require("../service/health");
const validate = require("../core/validation");

const ping = (ctx) => {
  ctx.status = 200;
  ctx.body = healthService.ping();
};
const getVersion = (ctx) => {
  ctx.status = 200;
  ctx.body = healthService.getVersion();
};

ping.validationScheme = null;
getVersion.validationScheme = null;

module.exports = (app) => {
  const router = new Router({
    prefix: "/health",
  });

  router.get("/ping", validate(ping.validationScheme), ping);
  router.get("/version", validate(getVersion.validationScheme), getVersion);

  app.use(router.routes()).use(router.allowedMethods());
};
