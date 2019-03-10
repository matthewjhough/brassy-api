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

    // seed user table with dummy data
    // db.user.bulkCreate(
    //     times(10, () => ({
    //         firstName: faker.name.findName(),
    //         lastName: faker.name.lastName(),
    //         username: faker.internet.email()
    //     }))
    // );

    // seed message table with dummy data
    // db.message.bulkCreate(
    //     times(10, () => ({
    //         content: faker.lorem.sentence(),
    //         userId: random(1, 10),
    //         created_at: new Date()
    //     }))
    // );

    app.listen({ port: 4000 }, () =>
        // eslint-disable-next-line
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
});