const fs = require('fs');
const path = require('path');
const config = require('config'); 
const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize(
  config.get('database.name'),
  config.get('database.username'),
  config.get('database.password'), 
  {
    host: config.get('database.host'),
    dialect: config.get('database.dialect'),
    logging: false,
  })

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== "index.js" &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;