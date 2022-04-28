'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('polls', [{
      firstName: 'John',
      lastName: 'Demo',
      email: 'John@Demo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('polls', null, {});
  }
};
