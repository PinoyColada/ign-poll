'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('options', [{
      choice: 'The game can do better',
      vote_count: 21,
      poll_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      choice: 'The best Halo game out of all the Halo games!',
      vote_count: 47,
      poll_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      choice: 'Never played the game.',
      vote_count: 30,
      poll_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('options', null, {});
  }
};
