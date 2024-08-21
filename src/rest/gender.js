const Router = require("@koa/router");
const genderService = require("../service/gender");
const Joi = require("joi");
const validate = require("../core/validation");

const getAllGenders = async (ctx) => {
  ctx.body = await genderService.getAll();
};
const getGenderById = async (ctx) => {
  ctx.body = await genderService.getById(Number(ctx.params.id));
};

getAllGenders.validationScheme = null;
getGenderById.validationScheme = {
  params: Joi.object({
    id: Joi.required(),
  }),
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/gender",
  });

  router.get("/", validate(getAllGenders.validationScheme), getAllGenders);
  router.get("/:id", validate(getGenderById.validationScheme), getGenderById);

  app.use(router.routes()).use(router.allowedMethods());
};
