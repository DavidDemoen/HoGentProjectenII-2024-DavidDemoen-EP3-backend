const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({
      OrderItem,
      Account,
      Address,
      OrderStatus,
      PaymentStatus,
      PaymentMethod,
      OrderPackaging,
      Company,
    }) {
      this.belongsTo(Company, {
        foreignKey: "sellerCompanyId",
      });
      this.belongsTo(Account, {
        foreignKey: "buyerAccountId",
        as: "buyer_account",
      });
      this.belongsTo(Address, {
        foreignKey: "shippingAddressId",
        as: "shipping_address",
      });
      this.belongsTo(Address, {
        foreignKey: "billingAddressId",
        as: "billing_address",
      });
      this.belongsTo(OrderStatus, {
        foreignKey: "orderStatusName",
        as: "order_status",
      });
      this.belongsTo(PaymentStatus, {
        foreignKey: "paymentStatusName",
        as: "payment_status",
      });
      this.belongsTo(PaymentMethod, {
        foreignKey: "paymentMethodName",
        as: "payment_method",
      });
      this.belongsTo(OrderPackaging, {
        foreignKey: "orderPackagingName",
        as: "order_packaging",
      });

      this.hasMany(OrderItem, {
        foreignKey: "orderId",
        as: "order_items",
      });
    }
  }

  Order.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      referenceId: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      orderDiscount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "orders",
      underscored: true,
    }
  );

  return Order;
};
