module.exports = `
type Author {
    id: ID!
    firstName: String!
    lastName: String!
    posts: [Post!]!
}
`;