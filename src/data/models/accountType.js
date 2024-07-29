const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class AccountType extends Model {
    static associate({ Account }) {
      this.hasMany(Account, {
        foreignKey: "accountTypeName",
      });
    }
  }

  AccountType.init(
    {
      referenceId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "AccountType",
      tableName: "account_types",
      underscored: true,
    }
  );
  return AccountType;
};
