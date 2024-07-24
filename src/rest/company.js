const Router = require("@koa/router");
const companyService = require("../service/company");

const getAllCompanies = async (ctx) => {
  ctx.body = companyService.getAll();
};
const getCompanyById = async (ctx) => {
  ctx.body = companyService.getById(Number(ctx.params.id));
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/companies",
  });

  router.get("/", getAllCompanies);
  router.get("/:id", getCompanyById);

  app.use(router.routes()).use(router.allowedMethods());
};
