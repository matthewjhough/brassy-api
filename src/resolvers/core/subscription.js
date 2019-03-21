const { withFilter } = require('apollo-server-express');
const brassy = require('../../index');

module.exports = {
    Subscription: {
        messageAdded: {
            subscribe: withFilter(
                () => brassy.observable.asyncIterator(['MESSAGE_ADDED']),
                (payload, args) =>
                    payload.messageAdded.sessionId === args.sessionId &&
          payload.messageAdded.userId !== args.userId
            )
        }
    }
};
