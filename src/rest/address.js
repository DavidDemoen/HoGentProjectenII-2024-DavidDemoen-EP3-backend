const Router = require("@koa/router");
const addressService = require("../service/address");
const Joi = require("joi");
const validate = require("../core/validation");

const getAllAddresses = async (ctx) => {
  console.log("Address controller called");
  ctx.body = await addressService.getAll();
};
const getAddressById = async (ctx) => {
  ctx.body = await addressService.getById(ctx.params.id);
};

const updateAddressById = async (ctx) => {
  const id = ctx.params.id;
  ctx.body = await addressService.updateById(id, ctx.request.body);
};

getAllAddresses.validationScheme = null;
getAddressById.validationScheme = {
  params: Joi.object({
    id: Joi.required(),
  }),
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/addresses",
  });

  router.get("/", validate(getAllAddresses.validationScheme), getAllAddresses);
  router.get("/:id", validate(getAddressById.validationScheme), getAddressById);
  router.put("/:id", updateAddressById);

  app.use(router.routes()).use(router.allowedMethods());
};
