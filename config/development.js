module.exports = {
  log: {
    level: "silly",
    disabled: false,
  },
  cors: {
    origins: ["http://localhost:5173"],
    maxAge: 3 * 60 * 60,
  },
  database: {
    username: "root",
    password: "",
    name: "b2b_webshop_ep3",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    migrations: {
      path: "./src/data/migrations",
    },
    models: {
      path: "./src/data/models",
    },
  },
};
