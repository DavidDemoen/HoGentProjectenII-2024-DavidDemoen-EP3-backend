const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate({ Company, AccountType, Address, Order, Gender }) {
      this.belongsTo(Company, {
        foreignKey: "companyId",
      });
      this.belongsTo(AccountType, {
        foreignKey: "accountTypeName",
      });
      this.belongsTo(Address, {
        foreignKey: "addressId",
        as: "accountAddress",
      });
      this.belongsTo(Gender, {
        foreignKey: "genderId",
        as: "gender",
      });
      this.hasMany(Order, {
        foreignKey: "buyerAccountId",
        as: "buyer_orders",
      });
    }
  }
  Account.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "Account",
      tableName: "accounts",
      underscored: true,
    }
  );

  return Account;
};
