const { Model } = require("sequelize");
const { Company } = require("./company");

module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate({ Company }) {
      Account.belongsTo(Company, {
        foreignKey: "companyId",
        as: "company",
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
