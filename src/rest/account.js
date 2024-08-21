const Router = require("@koa/router");
const accountService = require("../service/account");
const Joi = require("joi");
const validate = require("../core/validation");

const getAllAccounts = async (ctx) => {
  ctx.body = await accountService.getAll();
};
const getAccountById = async (ctx) => {
  ctx.body = await accountService.getById(ctx.params.id);
};

const createAccount = async (ctx) => {
  ctx.body = await accountService.create(ctx.request.body);
};
const login = async (ctx) => {
  const { email, password } = ctx.request.body;
  const token = await accountService.login(email, password);
  ctx.body = token;
};

getAllAccounts.validationScheme = null;
getAccountById.validationScheme = {
  params: Joi.object({
    id: Joi.required(),
  }),
};
createAccount.validationScheme = {
  body: {
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    companyId: Joi.required(),
    accountTypeName: Joi.string().required(),
    genderId: Joi.required(),
    addressId: Joi.required(),
  },
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/accounts",
  });

  router.get("/", validate(getAllAccounts.validationScheme), getAllAccounts);
  router.get("/:id", validate(getAccountById.validationScheme), getAccountById);
  router.post("/", validate(createAccount.validationScheme), createAccount);
  router.post("/login", login);

  app.use(router.routes()).use(router.allowedMethods());
};
