module.exports = {
    createSession: async (parent, { sessionTypeId, userId }, { db }) => {
        const sessionType = await db.sessionType.findById(sessionTypeId);
        return db.session
            .create({
                userId: userId,
                sessionTypeId: sessionType.dataValues.id
            })
            .then(async session => {
                await session.setUsers(userId);
                return session;
            });
    },
    deleteSession: (parent, { id }, { db }) =>
        db.session.destroy({
            where: {
                id: id
            }
        })
};
