const Router = require("@koa/router");
const manufacturerService = require("../service/manufacturer");

const getAllManufacturers = async (ctx) => {
  ctx.body = await manufacturerService.getAll();
};
const getManufacturerById = async (ctx) => {
  ctx.body = await manufacturerService.getById(Number(ctx.params.id));
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/manufacturers",
  });

  router.get("/", getAllManufacturers);
  router.get("/:id", getManufacturerById);

  app.use(router.routes()).use(router.allowedMethods());
};
