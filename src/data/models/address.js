const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate({ Company, Account, Order, Manufacturer }) {
      this.hasMany(Company, {
        foreignKey: "addressId",
      });
      this.hasMany(Account, {
        foreignKey: "addressId",
      });
      this.hasMany(Order, {
        foreignKey: "shippingAddressId",
      });
      this.hasMany(Order, {
        foreignKey: "billingAddressId",
      });
      this.hasMany(Manufacturer, {
        foreignKey: "manufacturerAddressId",
      });
    }
  }
  Address.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Address",
      tableName: "addresses",
      underscored: true,
    }
  );
  return Address;
};
