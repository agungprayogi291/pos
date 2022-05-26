'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users',[{
      firstName :"agung",
      lastName:"prayogi",
      email :'Agunprayogi291@gmai.com',
      createdAt: new Date(),
      updatedAt : new Date()

    },
    {
      firstName:"Ryan",
      lastName:"Musthofa",
      email:"ryancecen-wakanda",
      createdAt: new Date(),
      updatedAt : new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users',null,{})
  }
};
