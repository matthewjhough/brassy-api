module.exports = `
type Post {
    id: ID!
    title: String
    content: String!
    authorId: ID!
    author: Author!
}
`;