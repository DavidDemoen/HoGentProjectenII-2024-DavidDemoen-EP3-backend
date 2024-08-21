const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CompanyProduct extends Model {
    static associate({ Company, Product }) {
      this.belongsTo(Company, {
        foreignKey: "companyId",
      });
      this.belongsTo(Product, {
        foreignKey: "productId",
      });
    }
  }
  CompanyProduct.init(
    {
      companyId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      productId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        allowNegative: false,
      },
    },
    {
      sequelize,
      modelName: "CompanyProduct",
      tableName: "company_product",
    }
  );
  return CompanyProduct;
};
