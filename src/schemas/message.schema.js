const status = require('./status.schema');

module.exports = `
type Message {
    id: ID!
    content: String!
    userId: ID!
    user: User!
    session: Session!
    ${status}
}
`;