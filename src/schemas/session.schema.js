const status = require('./status.schema');

module.exports = `
type Session {
    id: ID!
    messageIds: [ID!]!
    messages: [Message!]!
    userIds: [ID!]!
    users: [User!]!
    sessionTypeId: ID!
    ${status}
}
`;