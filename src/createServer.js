const koa = require("koa");
const config = require("config");
const { getLogger, initializeLogger } = require("./core/logging");
const installRest = require("./rest");
const { initializeData, shutDownData } = require("./data/dataHandler");
const { installMiddleware } = require("./core/installMiddleware");

const LOG_LEVEL = config.get("log.level");
const LOG_DISABLED = config.get("log.disabled");
const NODE_ENV = config.get("env");

const createServer = async () => {
  initializeLogger({
    level: LOG_LEVEL,
    disabled: LOG_DISABLED,
    defaultMeta: {
      env: NODE_ENV,
    },
  });

  await initializeData();

  const app = new koa();

  installMiddleware(app);
  installRest(app);

  return {
    getApp() {
      return app;
    },
    start() {
      return new Promise((resolve) => {
        app.listen(9000, () => {
          getLogger().info("🚀 Server listening on http://localhost:9000");
          resolve();
        });
      });
    },
    async stop() {
      app.removeAllListeners();
      await shutDownData();
      getLogger().info("Goodbye! 👋");
    },
  };
};

module.exports = { createServer };
