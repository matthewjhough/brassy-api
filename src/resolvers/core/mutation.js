const sessionMutations = require('../session/session.mutations');
const messageMutations = require('../message/message.mutations');

module.exports = {
    Mutation: Object.assign({}, sessionMutations, messageMutations)
};
