const { messageMutations } = require('../message');
const { sessionMutations } = require('../session');
module.exports = {
    Mutation: Object.assign({}, messageMutations, sessionMutations)
};
