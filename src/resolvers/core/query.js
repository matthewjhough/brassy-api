module.exports = {
    Query: {
    // todo contacts (list of users with access to)
        users: (parent, args, { db }) => db.user.findAll(),
        // To be removed, shouldn't be able to query all sessions.
        sessions: (parent, args, { db }) => db.session.findAll(),
        session: (parent, { userId }, { db }) =>
            db.session.findAll({
                include: [
                    {
                        model: db.user,
                        attributs: ['id'],
                        through: { where: { userId } }
                    }
                ]
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
