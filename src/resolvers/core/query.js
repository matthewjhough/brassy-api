module.exports = {
    Query: {
    // todo contacts (list of users with access to)
        users: (parent, args, { db }) => db.user.findAll(),
        // To be removed, shouldn't be able to query all sessions.
        sessions: (parent, { currentUserId }, { db }) =>
            db.session.findAll({
                include: [
                    {
                        model: db.user,
                        where: { id: currentUserId }
                    }
                ]
            }),
        session: async (parent, { sessionId }, { db }) =>
            db.session.findOne({
                where: {
                    id: sessionId
                }
            }),
        sessionTypes: (parent, args, { db }) => db.sessionType.findAll(),
        messages: (parent, { sessionId }, { db }) =>
            db.message.findAll({
                where: {
                    sessionId
                }
            }),
        user: (parent, { id }, { db }) => db.user.findById(id),
        // to remove
        message: (parent, { id }, { db }) => db.message.findById(id)
    }
};
