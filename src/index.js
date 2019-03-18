const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const db = require('./models');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

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

const app = express();
server.applyMiddleware({ app });

app.use(express.static('app/public'));

db.sequelize.sync().then(() => {
    app.listen({ port: 4000 }, () =>
    // eslint-disable-next-line
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
});
