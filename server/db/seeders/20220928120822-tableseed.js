'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     const arr = [
      {
        date: '21.05.2021',
        title: 'Иркутск',
        quantity: 4,
        distance: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        date: '21.05.2021',
        title: 'Москва',
        quantity: 5,
        distance: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        date: "21.06.2021",
        title: 'Санкт-Петербург',
        quantity:3,
        distance: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        date: '21.07.2021',
        title: 'Казань',
        quantity:2,
        distance: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '21.08.2021',
        title: 'Симферополь',
        quantity: 4,
        distance: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '21.08.2021',
        title: 'Казань',
        quantity: 6,
        distance: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '21.09.2021',
        title: 'Иркутск',
        quantity: 4,
        distance: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '21.09.2021',
        title: 'Чита',
        quantity: 8,
        distance: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '21.10.2021',
        title: 'Улан-Удэ',
        quantity: 3,
        distance: 450,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '21.10.2021',
        title: 'Иркутск',
        quantity: 9,
        distance: 550,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '21.11.2021',
        title: 'Хабаровск',
        quantity: 9,
        distance: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '21.12.2021',
        title: 'Симферополь',
        quantity: 1,
        distance: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '21.12.2021',
        title: 'Новосибирск',
        quantity: 2,
        distance: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '21.01.2022',
        title: 'Хабаровск',
        quantity: 3,
        distance: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '15.02.2021',
        title: 'Улан-Удэ',
        quantity: 6,
        distance: 160,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '25.08.2022',
        title: 'Ульяновск',
        quantity: 7,
        distance: 190,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '18.06.2022',
        title: 'Иркутск',
        quantity: 4,
        distance: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '04.07.2022',
        title: 'Чита',
        quantity: 9,
        distance: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '08.08.2022',
        title: 'Санкт-Петербург',
        quantity: 4,
        distance: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '13.09.2022',
        title: 'Новосибирск',
        quantity: 2,
        distance: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '10.05.2022',
        title: 'Екатеринбург',
        quantity: 4,
        distance: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '12.04.2022',
        title: 'Ульяновск',
        quantity: 1,
        distance: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '12.03.2022',
        title: 'Симферополь',
        quantity: 7,
        distance: 350,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '27.04.2022',
        title: 'Санкт-Петербург',
        quantity: 8,
        distance: 240,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '23.02.2022',
        title: 'Хабаровск',
        quantity: 5,
        distance: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '01.05.2022',
        title: 'Улан-Удэ',
        quantity: 4,
        distance: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '14.07.2021',
        title: 'Екатеринбург',
        quantity: 2,
        distance: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '20.03.2022',
        title: 'Чита',
        quantity: 1,
        distance: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '21.05.2021',
        title: 'Ульяновск',
        quantity: 9,
        distance: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '21.05.2021',
        title: 'Улан-Удэ',
        quantity: 1,
        distance: 170,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '21.05.2021',
        title: 'Москва',
        quantity: 1,
        distance: 130,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '21.05.2021',
        title: 'Екатеринбург',
        quantity: 2,
        distance: 64,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '16.03.2022',
        title: 'Санкт-Петербург',
        quantity: 6,
        distance: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '17.10.2021',
        title: 'Иркутск',
        quantity: 1,
        distance: 58,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '14.02.2022',
        title: 'Симферополь',
        quantity: 4,
        distance: 43,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '24.11.2021',
        title: 'Чита',
        quantity: 8,
        distance: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '07.08.2021',
        title: 'Екатеринбург',
        quantity: 5,
        distance: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '18.04.2022',
        title: 'Чита',
        quantity: 6,
        distance: 130,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '13.02.2022',
        title: 'Москва',
        quantity: 7,
        distance: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '18.07.2022',
        title: 'Санкт-Петербург',
        quantity: 3,
        distance: 175,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '14.07.2022',
        title: 'Иркутск',
        quantity: 6,
        distance: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '20.12.2021',
        title: 'Казань',
        quantity: 5,
        distance: 140,
        createdAt: new Date(),
        updatedAt: new Date(),
      },  {
        date: '20.07.2022',
        title: 'Москва',
        quantity: 4,
        distance: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: '16.03.2022',
        title: 'Хабаровск',
        quantity: 3,
        distance: 130,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        date: '30.02.2022',
        title: 'Хабаровск',
        quantity: 2,
        distance: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        date: '14.07.2021',
        title: 'Новосибирск',
        quantity: 5,
        distance: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Tables', arr, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tables', null, {});
  }
};
