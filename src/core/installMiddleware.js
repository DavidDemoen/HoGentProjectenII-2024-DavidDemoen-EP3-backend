const config = require("config");
const bodyParser = require("koa-bodyparser");
const koaCors = require("@koa/cors");
const emoji = require("node-emoji");
const koaHelmet = require("koa-helmet");
const { getLogger } = require("./logging");

const CORS_ORIGINS = config.get("cors.origins");
const CORS_MAX_AGE = config.get("cors.maxAge");

const installMiddleware = (app) => {
  //CORS
  app.use(
    koaCors({
      origin: (ctx) => {
        if (CORS_ORIGINS.indexOf(ctx.request.header.origin) !== -1) {
          return ctx.request.header.origin;
        }
        return CORS_ORIGINS[0];
      },
      allowHeaders: ["Accept", "Content-Type", "Authorization"],
      maxAge: CORS_MAX_AGE,
    })
  );

  //LOGGER
  app.use(async (ctx, next) => {
    getLogger().info(`${emoji.get("fast_forward")} ${ctx.method} ${ctx.url}`);

    const getStatusEmoji = () => {
      if (ctx.status >= 500) return emoji.get("skull");
      if (ctx.status >= 400) return emoji.get("x");
      if (ctx.status >= 300) return emoji.get("rocket");
      if (ctx.status >= 200) return emoji.get("white_check_mark");
      return emoji.get("rewind");
    };
    try {
      await next();

      getLogger().info(
        `${getStatusEmoji()} ${ctx.method} ${ctx.status} ${ctx.url}`
      );
    } catch (error) {
      getLogger().error(
        `${emoji.get("x")} ${ctx.method} ${ctx.status} ${ctx.url}`,
        {
          error,
        }
      );
      throw error;
    }
  });

  //BODYPARSER
  app.use(bodyParser());

  //HELMET
  app.use(koaHelmet());
};

module.exports = { installMiddleware };
