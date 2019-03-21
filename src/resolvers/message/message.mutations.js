const brassy = require('../../index');

module.exports = {
    createMessage: async (parent, { content, userId, sessionId }, { db }) => {
        const message = await db.message.create({
            content: content,
            userId: userId,
            sessionId: sessionId
        });

        await brassy.observable.publish('MESSAGE_ADDED', {
            messageAdded: message
        });

        return message;
    },
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
