module.exports = `
type User {
    id: ID!
    firstName: String
    lastName: String
    username: String
    messages: [Message!]!
}
`;