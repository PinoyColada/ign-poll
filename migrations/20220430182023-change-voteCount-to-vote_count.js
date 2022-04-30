'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('options', 'voteCount', 'vote_count')
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('options', 'vote_count', 'voteCount')
  }
}