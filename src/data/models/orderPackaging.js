const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class OrderPackaging extends Model {
    static associate({ Order }) {
      this.hasMany(Order, {
        foreignKey: "orderPackagingName",
        as: "orders",
      });
    }
  }
  OrderPackaging.init(
    {
      referenceId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "OrderPackaging",
      tableName: "order_packagings",
      underscored: true,
    }
  );
  return OrderPackaging;
};
