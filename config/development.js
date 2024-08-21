module.exports = {
  auth: {
    argon: {
      saltLength: 16,
      hashLength: 32,
      timeCost: 6,
      memoryCost: 2 ** 17,
    },
    jwt: {
      secret:
        "eenveeltemoeilijksecretdatniemandooitzalradenandersisdesitegehacked",
      expirationInterval: 60 * 60 * 1000,
      issuer: "b2b.io",
      audience: "b2b.io",
    },
  },
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
