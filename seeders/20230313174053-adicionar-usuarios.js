'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('usuarios', [
        {nome: 'mariana santos'},
        {nome: 'taylor swift'},
        {nome: 'lana del rey'},
        {nome: 'nick florzinha'},
        {nome: 'camila cabello'}

      ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
