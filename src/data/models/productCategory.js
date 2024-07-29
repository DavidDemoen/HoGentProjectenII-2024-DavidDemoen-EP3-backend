const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    static associate({ Product }) {
      this.hasMany(Product, {
        foreignKey: "productCategoryId",
        as: "products",
      });
    }
  }
  ProductCategory.init(
    {
      referenceId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "ProductCategory",
      tableName: "product_categories",
      underscored: true,
    }
  );
  return ProductCategory;
};
