const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class PaymentMethod extends Model {
    static associate({ Order }) {
      this.hasMany(Order, {
        foreignKey: "paymentMethodName",
        as: "orders",
      });
    }
  }
  PaymentMethod.init(
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
      modelName: "PaymentMethod",
      tableName: "payment_methods",
      underscored: true,
    }
  );
  return PaymentMethod;
};
