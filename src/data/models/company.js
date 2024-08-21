const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate({ Account, Address, CompanyProduct, Product, Order }) {
      this.hasMany(Account, {
        foreignKey: "companyId",
        as: "accounts",
      });
      this.hasMany(Order, {
        foreignKey: "sellerCompanyId",
      });
      this.belongsToMany(Product, {
        through: CompanyProduct,
        foreignKey: "companyId",
      });
      this.belongsTo(Address, {
        foreignKey: "addressId",
      });
    }
  }

  Company.init(
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
      logo: {
        type: DataTypes.STRING,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      has_shop: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      vat: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      tagline: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Company",
      tableName: "companies",
      underscored: true,
    }
  );

  return Company;
};
