module.exports = {
  log: {
    level: "info",
    disabled: false,
  },
  cors: {
    origins: ["http://localhost:5173"],
    maxAge: 3 * 60 * 60,
  },
  database: {
    username: "root",
    password: "",
    name: "platinum-eleven_production",
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
