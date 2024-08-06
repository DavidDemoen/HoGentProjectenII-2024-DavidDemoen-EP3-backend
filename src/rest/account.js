const Router = require("@koa/router");
const accountService = require("../service/account");

const getAllAccounts = async (ctx) => {
  ctx.body = await accountService.getAll();
};
const getAccountById = async (ctx) => {
  ctx.body = await accountService.getById(Number(ctx.params.id));
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/accounts",
  });

  router.get("/", getAllAccounts);
  router.get("/:id", getAccountById);

  app.use(router.routes()).use(router.allowedMethods());
};
