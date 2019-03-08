const { bookResolvers, bookSchema } = require('./books');

module.exports = {
    resolvers: Object.assign({}, bookResolvers),
    typeDefs: Object.assign({}, bookSchema)
};