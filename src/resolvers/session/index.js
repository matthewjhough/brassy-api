/* eslint-disable */
module.exports = {
    createSession: async (parent, { sessionTypeId, userId }, { db }, info) => {
        const sessionType = await db.sessionType.findById(sessionTypeId);
        return db.session.create({
            userId: userId,
            sessionTypeId: sessionType.dataValues.id
        }).then(async (session) => {
            await session.setUsers(userId);

            return session;
        });
    }
    ,
    deleteSession: (parent, { id }, { db }, info) =>
        db.session.destroy({
            where: {
                id: id
            }
        })
};