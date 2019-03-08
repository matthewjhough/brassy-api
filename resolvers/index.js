const { postResolvers, postSchema } = require('./posts');

module.exports = {
    resolvers: Object.assign({}, postResolvers),
    typeDefs: Object.assign({}, postSchema)
};