/* eslint-disable */
const DateMap = require('./date');

module.exports = {
    Date: DateMap,
    User: {
        messages: (parent, args, context, info) => parent.getMessages(),
    },
    Message: {
        user: (parent, args, context, info) => parent.getUser(),
    },
    Query: {
        users: (parent, args, { db }, info) => db.user.findAll(),
        messages: (parent, args, { db }, info) => db.message.findAll(),
        user: (parent, { id }, { db }, info) => db.user.findById(id),
        message: (parent, { id }, { db }, info) => db.message.findById(id)
    },
    Mutation: {
        createMessage: (parent, { content, userId }, { db }, info) =>
            db.message.create({
                content: content,
                userId: userId
            }),

        updateMessage: async (parent, { content, userId, id }, { db }, info) => {
            await db.message.update({
                content: content,
                userId: userId
            },
                {
                    where: {
                        id: id
                    }
                })

            return db.message.findById(id);
        },
        deleteMessage: (parent, { id }, { db }, info) =>
            db.message.destroy({
                where: {
                    id: id
                }
            })
    }
};