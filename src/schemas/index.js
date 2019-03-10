const user = require('./user.schema');
const message = require('./message.schema');
const session = require('./session.schema');
const sessionType = require('./sessionType.schema');
const status = require('./status.schema');
const scalars = require('./scalars.schema');

module.exports = `
  ${scalars}

  ${user}

  ${message}

  ${session}

  ${sessionType}

  ${status}

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