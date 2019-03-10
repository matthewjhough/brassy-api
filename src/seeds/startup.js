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

    // eslint-disable-next-line
    console.log(':::::DATA SEED COMPLETE, CLOSE SESSION NOW::::::');
});