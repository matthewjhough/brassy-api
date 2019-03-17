const { PubSub } = require('apollo-server-express');

const pubsub = new PubSub();

const MESSAGE_ADDED = 'MESSAGE_ADDED';

module.exports = {
    Subscription: {
        messageAdded: {
            // Additional event labels can be passed to asyncIterator creation
            subscribe: () => pubsub.asyncIterator([MESSAGE_ADDED])
        }
    }
};
