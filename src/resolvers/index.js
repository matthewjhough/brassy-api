const DateMap = require('./_types/date');
const { messageQueries } = require('./message');
const { sessionQueries } = require('./session');
const { mutations, queries, subscriptions } = require('./core');

const MiscQueriesAndTypes = {
    Date: DateMap,
    User: {
        sessions: parent => parent.getSessions(),
        messages: parent => parent.getMessages()
    }
};

module.exports = Object.assign(
    {},
    MiscQueriesAndTypes,
    messageQueries,
    sessionQueries,
    subscriptions,
    queries,
    mutations
);
