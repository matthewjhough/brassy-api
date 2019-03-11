/* eslint-disable */
module.exports = {
    createSession: async (parent, { sessionTypeId, session_users }, { db }, info) => {
        const sessionType = await db.sessionType.findById(sessionTypeId);
        console.log(':::INPUT USER IDS::::', session_users)
        return db.session.create({
            session_users: session_users,
            sessionTypeId: sessionType.dataValues.id
        })
    }
    ,
    deleteSession: (parent, { id }, { db }, info) =>
        db.session.destroy({
            where: {
                id: id
            }
        })
};