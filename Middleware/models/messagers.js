"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Messagers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Messagers.belongsTo(models.Users, { as: "Sender", foreignKey: "from_id" });
      Messagers.belongsTo(models.Users, { as: "Receiver", foreignKey: "to_user_id" });
    }
  }
  Messagers.init(
    {
      from_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      // message: DataTypes.STRING,
      // submit_date: DataTypes.DATE,
      // to_user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Messagers",
    }
  );
  return Messagers;
};
