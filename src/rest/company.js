const Router = require("@koa/router");
const companyService = require("../service/company");
const Joi = require("joi");
const validate = require("../core/validation");

const getAllCompanies = async (ctx) => {
  ctx.body = await companyService.getAll();
};
const getCompanyById = async (ctx) => {
  ctx.body = await companyService.getById(ctx.params.id);
};
const getCompaniesWithActiveShop = async (ctx) => {
  ctx.body = await companyService.getCompaniesWithActiveShop();
};
const getProductsByCompanyId = async (ctx) => {
  ctx.body = await companyService.getProductsByCompanyId(ctx.params.id);
};
const getProductsByCompanyIdFiltered = async (ctx) => {
  ctx.body = await companyService.getFilteredProducts(
    ctx.params.id,
    ctx.request.body
  );
};
const getPurchasersByCompanyId = async (ctx) => {
  ctx.body = await companyService.getPurchasersByCompanyId(ctx.params.id);
};
const getProductStockFromCompany = async (ctx) => {
  const companyId = ctx.params.companyId;
  const productId = ctx.params.productId;
  ctx.body = await companyService.getProductStockFromCompany(
    companyId,
    productId
  );
};

getAllCompanies.validationScheme = null;
getCompanyById.validationScheme = {
  params: Joi.object({
    id: Joi.required(),
  }),
};
getProductsByCompanyId.validationScheme = {
  params: Joi.object({
    id: Joi.required(),
  }),
};
getPurchasersByCompanyId.validationScheme = {
  params: Joi.object({
    id: Joi.required(),
  }),
};
getProductStockFromCompany.validationScheme = {
  params: Joi.object({
    companyId: Joi.required(),
    productId: Joi.required(),
  }),
};

module.exports = (app) => {
  const router = new Router({
    prefix: "/companies",
  });

  router.get("/", validate(getAllCompanies.validationScheme), getAllCompanies);
  router.get("/:id", validate(getCompanyById.validationScheme), getCompanyById);
  router.get(
    "/:id/products",
    validate(getProductsByCompanyId.validationScheme),
    getProductsByCompanyId
  );
  router.get("/:id/products/filtered", getProductsByCompanyIdFiltered);
  router.get(
    "/filter/has_shop=true",
    validate(getAllCompanies.validationScheme),
    getCompaniesWithActiveShop
  );
  router.get(
    "/:id/accounts/account_type=purchaser",
    validate(getProductsByCompanyId.validationScheme),
    getPurchasersByCompanyId
  );
  router.get(
    "/:companyId/products/:productId/stock",
    validate(getProductStockFromCompany.validationScheme),
    getProductStockFromCompany
  );

  app.use(router.routes()).use(router.allowedMethods());
};
