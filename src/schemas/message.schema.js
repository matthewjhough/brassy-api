module.exports = `
type Message {
    id: ID!
    content: String!
    userId: ID!
    user: User!
    status: Status!
    session: Session!
}
`;