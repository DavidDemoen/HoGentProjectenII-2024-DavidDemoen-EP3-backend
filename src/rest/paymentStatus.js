const Router = require("@koa/router");
const paymentStatusService = require("../service/paymentStatus");
const Joi = require("joi");
const validate = require("../core/validation");

const getAllPaymentStatuses = async (ctx) => {
    ctx.body = await paymentStatusService.getAll();
}

getAllPaymentStatuses.validationScheme = null;

module.exports = (app) => {
    const router = new Router({
        prefix: "/paymentStatuses",
    });

    router.get(
        "/",
        validate(getAllPaymentStatuses.validationScheme),
        getAllPaymentStatuses
    );

    app.use(router.routes()).use(router.allowedMethods());
}