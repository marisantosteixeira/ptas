'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('pessoas', [
        { 
          nome: 'mari', 
          idade: '17', 
          sobrenome: 'santos' 
        },{ 
          nome: 'taylor', 
          idade: '33', 
          sobrenome: 'swift' 
        },{ 
          nome: 'nick', 
          idade: '22', 
          sobrenome: 'florzinha' 
        },{ 
          nome: 'bia', 
          idade: '16', 
          sobrenome: 'vieira' 
        },{ 
          nome: 'ana', 
          idade: '18', 
          sobrenome: 'piui' 
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('pessoas', null, {});
  }
};
