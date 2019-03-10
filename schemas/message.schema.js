module.exports = `
type Message {
    id: ID!
    userId: ID!
    user: User!
    content: String
    created_at: Date
    updated_at: Date
}
`;