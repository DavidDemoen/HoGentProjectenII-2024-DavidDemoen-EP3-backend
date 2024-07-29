const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class OrderStatus extends Model {
    static associate({Order}) {
      this.hasMany(Order, {
        foreignKey: "orderStatusName",
        as: "orders",
      });
    }
  }
  OrderStatus.init(
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
      modelName: "OrderStatus",
      tableName: "order_statuses",
      underscored: true,
    }
  );
  return OrderStatus;
};
