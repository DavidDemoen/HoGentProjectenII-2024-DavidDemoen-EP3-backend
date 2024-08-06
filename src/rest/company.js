const Router = require("@koa/router");
const companyService = require("../service/company");

const getAllCompanies = async (ctx) => {
  ctx.body = await companyService.getAll();
};
const getCompanyById = async (ctx) => {
  ctx.body = await companyService.getById(Number(ctx.params.id));
};
const getProductsByCompanyId = async (ctx) => {
  ctx.body = await companyService.getProductsByCompanyId(Number(ctx.params.id));
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/companies",
  });

  router.get("/", getAllCompanies);
  router.get("/:id", getCompanyById);
  router.get("/:id/products", getProductsByCompanyId);

  app.use(router.routes()).use(router.allowedMethods());
};
