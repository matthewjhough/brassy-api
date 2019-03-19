const isEqual = require('lodash/isEqual');

module.exports = {
    createSession: async (parent, { sessionTypeId, ids }, { db }) => {
        const sessionType = await db.sessionType.findById(sessionTypeId);
        const existing = await db.session.findAll({
            include: [
                {
                    model: db.user,
                    where: { id: { in: ids } }
                }
            ]
        });

        if (existing.length > 0 && existing.session !== null) {
            const result = existing.find(session => {
                const userIds = session.users.map(({ id }) => `${id}`);
                if (isEqual(userIds, ids)) {
                    return session;
                }

                return false;
            });

            if (result) return result;
        }

        try {
            return db.session
                .create({
                    userId: ids,
                    sessionTypeId: sessionType.dataValues.id
                })
                .then(async session => {
                    await session.setUsers(ids);
                    return session;
                });
        } catch (error) {
            return error;
        }
    },
    deleteSession: (parent, { id }, { db }) =>
        db.session.destroy({
            where: {
                id: id
            }
        })
};
