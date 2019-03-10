const user = require('./user.schema');
const message = require('./message.schema');
const scalars = require('./scalars.schema');

module.exports = `
  ${scalars}

  ${user}

  ${message}

  type Query {
    messages: [Message!]!
    message(id: ID!): Message
    user(id: ID!): User
    users: [User!]!
  }
  type Mutation {
    createMessage(content: String!, userId: ID!): Message!
    updateMessage(id: ID!, content:String!): Message
    deleteMessage(id: ID!): Int!
  }
`;