module.exports = `
type Session {
    id: ID!
    messages: [Message!]!
    users: [User!]!
    status: Status!
    sessionType: SessionType!
}
`;