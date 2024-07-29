const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate({ Order, Product }) {
      this.belongsTo(Product, {
        foreignKey: "productId",
        as: "product",
      });
      this.belongsTo(Order, {
        foreignKey: "orderId",
        as: "order",
      });
    }
  }
  OrderItem.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      transactionUnitPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      transactionDiscount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "OrderItem",
      tableName: "order_items",
      underscored: true,
    }
  );
  return OrderItem;
};
