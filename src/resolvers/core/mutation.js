const { messageMutations } = require('../message');
const SessionMutations = require('../session');
module.exports = {
    Mutation: Object.assign({}, messageMutations, SessionMutations)
};
