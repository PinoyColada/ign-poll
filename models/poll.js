'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Poll extends Model {

    static associate(models) {
      Poll.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Poll.hasMany(models.Option, {
        foreignKey: 'poll_id',
        as: 'poll',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Poll.init({
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Poll',
    tableName: 'polls'
  });
  return Poll;
};