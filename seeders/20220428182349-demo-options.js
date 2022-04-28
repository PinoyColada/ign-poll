'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('polls', [{
      choice: 'The game can do better',
      voteCount: 21,
      poll_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      choice: 'The best Halo game out of all the Halo games!',
      voteCount: 47,
      poll_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      choice: 'Never played the game.',
      voteCount: 30,
      poll_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('options', null, {});
  }
};
