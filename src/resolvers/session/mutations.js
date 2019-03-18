module.exports = {
    createSession: async (parent, { sessionTypeId, userId }, { db }) => {
        const sessionType = await db.sessionType.findById(sessionTypeId);
        const sessionExists = await db.session.findOne({
            include: [
                {
                    model: db.user,
                    where: { id: { in: userId } }
                }
            ]
        });

        if (sessionExists.session !== null) return sessionExists;

        try {
            return db.session
                .create({
                    userId: userId,
                    sessionTypeId: sessionType.dataValues.id
                })
                .then(async session => {
                    await session.setUsers(userId);
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
