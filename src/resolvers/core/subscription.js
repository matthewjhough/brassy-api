const brassy = require('../../index');

module.exports = {
    Subscription: {
        messageAdded: {
            subscribe: () => brassy.observable.asyncIterator(['MESSAGE_ADDED'])
        }
    }
};
