module.exports = {
    createMessage: async (parent, { content, userId, sessionId }, { db }) =>
        await db.message.create({
            content: content,
            userId: userId,
            sessionId: sessionId
        }),
    updateMessage: async (parent, { content, id }, { db }) => {
        await db.message.update(
            {
                content: content
            },
            {
                where: {
                    id: id
                }
            }
        );

        return db.message.findById(id);
    },
    deleteMessage: (parent, { id }, { db }) =>
        db.message.destroy({
            where: {
                id: id
            }
        })
};
