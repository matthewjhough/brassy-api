/* eslint-disable */
const DateMap = require('./_types/date');
const MessageMutations = require('./message');
const SessionMutations = require('./session')

module.exports = {
    Date: DateMap,
    User: {
        sessions: (parent, args, context, info) => parent.getSessions(),
        messages: (parent, args, context, info) => parent.getMessages(),
    },
    Message: {
        session: (parent, args, context, info) => parent.getSession(),
        user: (parent, args, context, info) => parent.getUser(),
    },
    Session: {
        messages: (parent, args, context, info) => parent.getMessages(),
        users: (parent, args, context, info) => parent.getUsers(),
        sessionType: (parent, args, { db }, info) => db.sessionType.findById(parent.dataValues.sessionTypeId)
    },
    Query: {
        users: (parent, args, { db }, info) => db.user.findAll(),
        sessions: (parent, args, { db }, info) => db.session.findAll(),
        sessionTypes: (parent, args, { db }, info) => db.sessionType.findAll(),
        messages: (parent, args, { db }, info) => db.message.findAll(),
        user: (parent, { id }, { db }, info) => db.user.findById(id),
        message: (parent, { id }, { db }, info) => db.message.findById(id)
    },
    Mutation: Object.assign({}, MessageMutations, SessionMutations)
};