/* eslint-disable */
module.exports = {
    createMessage: async (parent, { content, userId }, { db }, info) =>
        await db.message.create({
            content: content,
            userId: userId
        })
    ,
    updateMessage: async (parent, { content, id }, { db }, info) => {
        await db.message.update({
            content: content
        },
            {
                where: {
                    id: id
                }
            });

        return db.message.findById(id);
    },
    deleteMessage: (parent, { id }, { db }, info) =>
        db.message.destroy({
            where: {
                id: id
            }
        })
};