const db = require('../models');

db.sequelize.sync().then(() => {
    // example bulk-create seed.
    // db.message.bulkCreate(
    //     times(10, () => ({
    //         content: faker.lorem.sentence(),
    //         userId: random(1, 10),
    //         created_at: new Date()
    //     }))
    // );

    db.sessionType.create({
        value: 'DIRECT'
    });
    // eslint-disable-next-line
  console.log('Direct session type added');

    db.sessionType.create({
        value: 'GROUP'
    });
    // eslint-disable-next-line
  console.log('Group session type added');

    db.user.create({
        firstName: 'Finn',
        lastName: 'Sterling',
        username: 'fsterling@test.com'
    });
    // eslint-disable-next-line
  console.log('User finn sterling added');

    db.user.create({
        firstName: 'Tyson',
        lastName: 'Harmon',
        username: 'tharmon@test.com'
    });
    // eslint-disable-next-line
  console.log('User Tyson Harmon added');

    const seedUserIds = ['1', '2'];

    db.session
        .create({
            userId: seedUserIds,
            sessionTypeId: '1'
        })
        .then(async session => {
            await session.setUsers(seedUserIds);
            return session;
        });
    console.log('Initial session created.');

    // eslint-disable-next-line
  console.log(':::::DATA SEED COMPLETE, CLOSE SESSION NOW::::::');
});
