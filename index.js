const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { times, random } = require('lodash');
const faker = require('faker');
const db = require('./models');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers,
    context: { db }
});

const app = express();
server.applyMiddleware({ app });

app.use(express.static('app/public'));

db.sequelize.sync().then(() => {
    // populate author table with dummy data
    db.author.bulkCreate(
        times(10, () => ({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName()
        }))
    );
    // populate post table with dummy data
    db.post.bulkCreate(
        times(10, () => ({
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraph(),
            authorId: random(1, 10)
        }))
    );

    app.listen({ port: 4000 }, () =>
        // eslint-disable-next-line
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
});