const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ OrderItem, ProductCategory, Manufacturer }) {
      this.hasMany(OrderItem, {
        foreignKey: "productId",
        as: "orderItems",
      });
      this.belongsTo(ProductCategory, {
        foreignKey: "productCategoryId",
      });
      this.belongsTo(Manufacturer, {
        foreignKey: "manufacturerId",
      });
    }
  }
  Product.init(
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
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      currentUnitPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      currentProductDiscount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
      underscored: true,
    }
  );
  return Product;
};
