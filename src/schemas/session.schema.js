const status = require('./status.schema');

module.exports = `
type Session {
    id: ID!
    messageId: [ID!]!
    messages: [Message!]!
    users: [User!]!
    userId: [ID!]!
    sessionTypeId: ID!
    sessionType: SessionType
    ${status}
}
`;