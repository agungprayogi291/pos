'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     return queryInterface.bulkInsert('brands',[
       {
         name:"nike",
         createdAt: new Date(),
         updatedAt : new Date()
       }
     ])
  },

  async down (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('brands',[],null)
  }
};
