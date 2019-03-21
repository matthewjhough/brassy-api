const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const http = require('http');
const db = require('./models');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
const { PubSub } = require('apollo-server-express');

const observable = new PubSub();
module.exports.observable = observable;

const PORT = 4000;
const app = express();
const server = new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers,
    context: ({ req, connection }) => {
        if (connection) {
            return { ...connection.context, db };
        }

        const token = req.headers.authorization || '';

        return { token, db };
    }
});

server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

db.sequelize.sync().then(() => {
    httpServer.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(
            `
🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}
🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
        );
    });
});
