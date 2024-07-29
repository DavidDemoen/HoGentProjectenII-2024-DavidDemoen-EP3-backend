const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Manufacturer extends Model {
    static associate({ Address, Product }) {
      this.hasMany(Product, {
        foreignKey: "manufacturerId",
      });

      this.belongsTo(Address, {
        foreignKey: "manufacturerAddressId",
      });
    }
  }
  Manufacturer.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vat: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Manufacturer",
      tableName: "manufacturers",
      underscored: true,
    }
  );
  return Manufacturer;
};
