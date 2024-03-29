const user = require('./user.schema');
const message = require('./message.schema');
const session = require('./session.schema');
const sessionType = require('./sessionType.schema');
const scalars = require('./scalars.schema');

module.exports = `
  ${scalars}

  ${user}

  ${message}

  ${session}

  ${sessionType}

  type Query {
    sessions(currentUserId: ID!): [Session!]!
    session(sessionId: ID): Session

    sessionTypes: [SessionType!]!

    messages(sessionId: ID!): [Message!]!
    message(id: ID!): Message

    user(id: ID!): User
    users: [User!]!
  }

  type Mutation {
    createMessage(content: String!, userId: ID!, sessionId: ID!): Message
    updateMessage(id: ID!, content:String!): Message
    deleteMessage(id: ID!): Int!
    createSession(ids: [ID!]!, sessionTypeId: ID!): Session!
    deleteSession(id: ID!): Int!
  }

  type Subscription {
    messageAdded(sessionId: ID!, userId: ID!): Message
  }
`;
