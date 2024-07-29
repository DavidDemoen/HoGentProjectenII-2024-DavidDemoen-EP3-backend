const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class PaymentStatus extends Model {
    static associate({ Order }) {
      this.hasMany(Order, {
        foreignKey: "paymentStatusName",
        as: "orders",
      });
    }
  }
  PaymentStatus.init(
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
      modelName: "PaymentStatus",
      tableName: "payment_statuses",
      underscored: true,
    }
  );
  return PaymentStatus;
};
