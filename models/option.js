'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {

    static associate(models) {
      Option.belongsTo(models.Poll, {
        foreignKey: 'poll_id',
        as: 'poll',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Option.init({
    choice: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vote_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    poll_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'poll_id',
      onDelete: 'CASCADE',
      references: {
        model: 'polls',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Option',
    tableName: 'options'
  });
  return Option;
};