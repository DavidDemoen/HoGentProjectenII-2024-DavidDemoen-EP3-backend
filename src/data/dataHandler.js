const config = require("config");
const { getLogger } = require("../core/logging");
const mysql = require("mysql2/promise");
const { sequelize } = require("./models");
const { seedAll } = require("./seeds");

const NODE_ENV = config.get("env");

let connection;

const initializeData = async () => {
  if (NODE_ENV === "test" || NODE_ENV === "development") {
    const { host, port, username: user, password } = config.get("database");
    connection = await mysql.createConnection({
      host,
      port,
      user,
      password,
    });

    await connection.query(
      `CREATE DATABASE IF NOT EXISTS ${config.get("database.name")}`
    );
  }
  if (NODE_ENV === "production") {
    await sequelize.sync({ alter: true });
  }
  if (NODE_ENV === "development") {
    await sequelize.sync({ force: true });
    await seedAll();
  }
  //   if (NODE_ENV === "test") {
  //     await sequelize.sync({ force: true });
  //     await testSeeds();
  //   }
};

const shutDownData = async () => {
  const logger = getLogger();
  logger.info("Shutting down database connection...");
  if (connection) {
    await connection.end();
  }
  await sequelize.close();
  logger.info("Database connection closed");
};

module.exports = { initializeData, shutDownData };
