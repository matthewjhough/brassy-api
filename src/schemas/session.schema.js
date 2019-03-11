const status = require('./status.schema');

module.exports = `
type Session {
    id: ID!
    messageIds: [ID!]!
    messages: [Message!]!
    session_users: [ID!]!
    users: [User!]!
    sessionTypeId: ID!
    sessionType: SessionType
    ${status}
}
`;