/* eslint-disable */
module.exports = {
    createSession: async (parent, { sessionTypeId, userIds }, { db }, info) => {
        const sessionType = await db.sessionType.findById(sessionTypeId);
        console.log('SESSIONTYPE::::::::::::', sessionType.dataValues);
        return db.session.create({
            userIds: userIds,
            sessionTypeId: sessionType.dataValues.id,
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