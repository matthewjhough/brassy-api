const status = require('./status.schema');

module.exports = `
type Session {
    id: ID!
    messageIds: [ID!]!
    messages: [Message!]!
    users: [User!]!
    userId: [ID!]!
    sessionTypeId: ID!
    sessionType: SessionType
    ${status}
}
`;