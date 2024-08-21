const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Gender extends Model {
    static associate({ Account }) {
      this.hasMany(Account, {
        foreignKey: "genderId",
        as: "accounts",
      });
    }
  }
  Gender.init(
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
      },
      abbreviation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salutation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Genders",
      tableName: "genders",
      underscored: true,
    }
  );
  return Gender;
};
