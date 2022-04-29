'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('polls', [{
      question: 'What do you think about Halo Infinite?',
      user_id: 1,
      img: 'https://assets-prd.ignimgs.com/2021/12/03/haloinfinite-singleplayerreview-blogroll-1638561548039.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('polls', null, {});
  }
};
